<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kontener extends Model
{
    use HasFactory;
    public $table="kontenerek";
    public $timestamps=false;
    public $guarded=[];
}
