<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Berles extends Model
{
    use HasFactory;

    protected $table = 'berlesek';
    public $timestamps=false;
    protected $fillable = [
    'felhasznalo_id',
    'csomag',
    'berlesiIdo',
    'ar',
    'status'
];

    public function felhasznalo()
    {
        return $this->belongsTo(Felhasznalo::class, 'felhasznalo_id');
    }

    public function csomagAdat()
    {
        return $this->belongsTo(Csomag::class, 'csomag');
    }
}