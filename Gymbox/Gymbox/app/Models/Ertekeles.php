<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ertekeles extends Model
{
    use HasFactory;
    public $table="ertekelesek";
    public $timestamps=false;
    public $guarded=[];
}
