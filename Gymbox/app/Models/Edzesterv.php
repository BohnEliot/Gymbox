<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Edzesterv extends Model
{
    use HasFactory;
    public $table="edzestervek";
    public $timestamps = false;
    public $guarded=[];
    public function szerzo()
    {
        return $this->belongsTo(Felhasznalo::class, 'felhasznalo_id');
    }

    public function csomagok()
    {
        return $this->hasMany(Csomag::class, 'edzesterv_id');
    }
}
