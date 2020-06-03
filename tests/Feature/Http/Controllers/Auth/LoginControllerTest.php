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



}
