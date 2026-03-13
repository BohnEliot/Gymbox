<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Felhasznalo extends Model
{
    use HasFactory;
    public $table="felhasznalok";
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

    public function edzestervek()
    {
        return $this->hasMany(Edzesterv::class, 'felhasznalo_id');
    }
}
