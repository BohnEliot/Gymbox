<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Csomag extends Model
{
    use HasFactory;
    public $table="csomagok";
    public $timestamps=false;
    public $guarded=[];

   public function kontener(){
        return $this->belongsTo(Kontener::class,'kontener');
    }

    public function ertekeles(){
        return $this->belongsTo(Ertekeles::class,'ertekeles');
    }

    public function gepcsomag(){
         return $this->belongsTo(Gepcsomag::class,'gepcsomag');
    }

}
