<?php

namespace Tests\Feature\Http\Controllers\Auth;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

use Tests\TestCase;

class LoginControllerTest extends TestCase
{
    use RefreshDatabase;


    /** @test */
    public function login_displays_validation_errors()
    {
        $response = $this->post('/api/auth/login', []);
        $response->assertStatus(302);
        $response->assertSessionHasErrors('email');
    }

    /** @test */
    public function login_authenticates_user()
    {
        \Artisan::call('passport:install');
        $user = factory(User::class)->create();

        $response = $this->post('/api/auth/login', [
            'email' => $user->email,
            'password' => 'password'
        ]);

        $response
            ->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);
        $this->assertAuthenticatedAs($user);

    }



}
