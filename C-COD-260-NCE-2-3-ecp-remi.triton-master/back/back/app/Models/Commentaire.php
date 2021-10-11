<?php

namespace App\Models;
use Jenssegers\Mongodb\Eloquent\Model;

class Commentaire extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'blog_commentaires';
}