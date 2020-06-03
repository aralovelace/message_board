<?php

namespace Tests\Unit;


use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Laravel\Passport\Passport;

class PostTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /** @test */
    public function test_can_create_post() {

        \Artisan::call('passport:install');
        $user = factory(User::class)->create();
        Passport::actingAs($user);

        $data = [
            'title' => $this->faker->sentence,
            'body' => $this->faker->paragraph,
            'user_id' => $user->id,
            'category_id' => 1
        ];

        $this->post(route('posts.store'), $data)
            ->assertStatus(201)
            ->assertJson(['data' => $data]);
    }



}
