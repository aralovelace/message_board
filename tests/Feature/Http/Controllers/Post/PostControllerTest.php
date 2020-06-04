<?php

namespace Tests\Feature\Http\Controllers\Post;

use App\Category;
use App\Post;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Passport\Passport;
use Tests\TestCase;
use App\Http\Controllers\PostsController;
use Throwable;

/**
 * Class PostsControllerTest.
 *
 * @covers \App\Http\Controllers\PostsController
 */
class PostsControllerTest extends TestCase
{
    use WithFaker, RefreshDatabase;
    /**
     * @var PostsController
     */
    protected $postsController;

    /**
     * {@inheritdoc}
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->postsController = new PostsController();
        $this->app->instance(PostsController::class, $this->postsController);
    }

    /**
     * {@inheritdoc}
     * @throws Throwable
     */
    protected function tearDown(): void
    {
        parent::tearDown();

        unset($this->postsController);
    }

    public function testIndex(): void
    {
        $this->get('/api/data/posts')
            ->assertStatus(200);
    }


    public function testStore(): void
    {
        \Artisan::call('passport:install');
        $user = factory(User::class)->create();
        $category = factory(Category::class)->create();
        Passport::actingAs($user);
        $data = [
            'title' => $this->faker->sentence,
            'body' => $this->faker->paragraph,
            'user_id' => $user->id,
            'category_id' => $category->id
        ];
        $this->post('/api/data/posts', $data)
            ->assertStatus(201);
    }

    public function testShow(): void
    {
        $post = factory(Post::class)->create();
        $this->get('api/data/posts/'.$post->id)
            ->assertStatus(200);
    }


    public function testUpdate(): void
    {
        \Artisan::call('passport:install');
        $user = factory(User::class)->create();
        $post = factory(Post::class)->create();
        $category = factory(Category::class)->create();
        Passport::actingAs($user);

        $data = [
            'title' => $this->faker->sentence,
            'body' => $this->faker->paragraph,
            'category_id' => $category->id
        ];

        $this->put('api/data/posts/'.$post->id,$data)
            ->assertStatus(200);
    }

    public function testDestroy(): void
    {
        \Artisan::call('passport:install');
        $user = factory(User::class)->create();
        Passport::actingAs($user);
        $post = factory(Post::class)->create();
        $this->delete('api/data/posts/'.$post->id)
            ->assertStatus(204);
    }
}
