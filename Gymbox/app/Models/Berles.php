<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Berles extends Model
{
    use HasFactory;
    public $table="berlesek";
    public $timestamps=false;
    public $guarded=[];

    public function csomag(){
        return $this->belongsTo(Csomag::class,'csomag');
    }
}
