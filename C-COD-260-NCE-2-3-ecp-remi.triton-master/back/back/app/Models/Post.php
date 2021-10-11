<?php

namespace App\Models;
use Jenssegers\Mongodb\Eloquent\Model;

class Post extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'blog_posts';
    // protected $fillable = [
    //     'firstName',
    //     'lastName',
    //     'email',
    //     'password',
    //     'type'
    // ];
}
