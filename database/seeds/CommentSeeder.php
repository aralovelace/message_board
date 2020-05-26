<?php

use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comments')->truncate();

        $comments = [
           [ 'user_id' => 1, 'post_id' => 1, 'comment' => 'This is my first comment' ]
        ];

        DB::table('comments')->insert($comments);
    }
}
