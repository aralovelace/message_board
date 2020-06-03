<?php

namespace Tests\Feature\Http\Controllers\Auth;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RegisterControllerTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /** @test */
    public function register_returns_form_view()
    {
        $response = $this->get(' api/auth/register');
        $response->assertStatus(200);

    }

    /** @test */
    public function register_returns_validation_error()
    {
        $response = $this->post('api/auth/register', []);
        $response->assertStatus(302);
        $response->assertSessionHasErrors(['name', 'email', 'password']);
    }

    /** @test */
    public function register_creates_and_authenticates_a_user()
    {
        \Artisan::call('passport:install');
        $name = $this->faker->name;
        $email = $this->faker->safeEmail;
        $password = $this->faker->password(8);

        $response = $this->post('api/auth/register', [
            'name' => $name,
            'email' => $email,
            'password' => $password
        ]);
        $response
            ->assertStatus(201)
            ->assertJson([
                'message' => 'User has been added successfully'
            ]);
    }
}


