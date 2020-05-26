<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name'
    ];

    protected $hidden = ['created_at','updated_at', 'deleted_at'];

    public function posts() {
        return $this->hasMany(Post::class, 'category_id','id');
    }

}
