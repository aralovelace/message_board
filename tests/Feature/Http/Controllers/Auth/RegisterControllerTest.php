<?php

namespace Tests\Feature\Http\Controllers\Auth;

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



}


