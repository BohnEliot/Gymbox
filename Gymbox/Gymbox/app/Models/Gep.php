<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gep extends Model
{
    use HasFactory;
    public $table="gepek";
    public $timestamps=false;
    public $guarded=[];
}
