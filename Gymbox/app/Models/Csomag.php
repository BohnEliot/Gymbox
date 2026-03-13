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

   public function kontener()
    {
        return $this->belongsTo(Kontener::class, 'kontener_id');
    }

    public function ertekeles()
    {
        return $this->belongsTo(Ertekeles::class, 'ertekeles_id');
    }

    public function gepcsomag()
    {
        return $this->belongsTo(Gepcsomag::class, 'gepcsomag_id');
    }

    public function edzesterv()
    {
        return $this->belongsTo(Edzesterv::class, 'edzesterv_id');
    }

}
