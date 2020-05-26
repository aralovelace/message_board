<?php

use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->truncate();

        $posts = [
            ['user_id' => 1, 'title' => 'Sample Title', 'body' => 'Sample content', 'category_id' => 1 ],
            ['user_id' => 2, 'title' => 'Second Sample Title', 'body' => 'Another Sample content', 'category_id' => 2 ],
            ['user_id' => 1, 'title' => 'I found a new solution to this problem', 'body' => 'Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Interdum velit euismod in pellentesque. Neque viverra justo nec ultrices dui sapien eget mi proin. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Integer quis auctor elit sed vulputate mi sit amet. Elementum eu facilisis sed odio morbi quis. At ultrices mi tempus imperdiet nulla malesuada. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Scelerisque viverra mauris in aliquam. Tellus id interdum velit laoreet id.', 'category_id' => 3 ],
            ['user_id' => 1, 'title' => 'Lorem ipsum dolor sit amet', 'body' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'category_id' => 4 ]
        ];

        DB::table('posts')->insert($posts);
    }
}
