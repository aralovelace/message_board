<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'user_id', 'post_id', 'comment_id','comment'
    ];

    public function post() {
        return $this->hasOne(Post::class, 'id','post_id');
    }

    public function user(){
        return $this->hasOne(User::class,'id','user_id');
    }
}
