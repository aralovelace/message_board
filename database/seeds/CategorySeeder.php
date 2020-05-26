<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->truncate();

        $categories = [
            ['name' => 'Technology'],
            ['name' => 'Music'],
            ['name' => 'Entertainment'],
            ['name' => 'Business'],
            ['name' => 'Food'],
            ['name' => 'Health & Fitness'],
            ['name' => 'Fashion'],
            ['name' => 'Beauty']
        ];

        DB::table('categories')->insert($categories);


    }
}
