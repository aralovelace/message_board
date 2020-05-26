<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();

        $users = [
            ['name' => 'April', 'email' => 'april@admin.com', 'password' => Hash::make('password')],
            ['name' => 'Admin', 'email' => 'admin@admin.com', 'password' => Hash::make('password')]
        ];



        DB::table('users')->insert($users);
    }
}
