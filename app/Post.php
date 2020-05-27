<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'user_id', 'title', 'body','category_id'
    ];

    protected $hidden = ['updated_at', 'deleted_at'];
    /**
     * @var mixed
     */

    public function category() {
        return $this->hasOne(Category::class, 'id','category_id');
    }

    public function comments(){
        return $this->hasMany(Comment::class,'post_id','id');
    }

    public function user(){
        return $this->hasOne(User::class,'id','user_id');
    }






}
