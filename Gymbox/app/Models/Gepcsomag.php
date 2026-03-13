<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gepcsomag extends Model
{
    use HasFactory;
    public $table="gepcsomagok";
    public $timestamps=false;
    public $guarded=[];

    public function gepId1(){
        return $this->belongsTo(Gep::class,'gepId1');
    }

    public function gepId2(){
        return $this->belongsTo(Gep::class,'gepId2');
    }

    public function gepId3(){
        return $this->belongsTo(Gep::class,'gepId3');
    }

    public function gepId4(){
        return $this->belongsTo(Gep::class,'gepId4');
    }

    public function gepId5(){
        return $this->belongsTo(Gep::class,'gepId5');
    }
}
