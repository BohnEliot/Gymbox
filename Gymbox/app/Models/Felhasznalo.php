<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Felhasznalo extends Model
{
    use HasFactory;

    public $table = "felhasznalok";
    public $timestamps = false;

    protected $fillable = [
        'nev',
        'email',
        'jelszo',
        'edzoE',
        'ertekeles_id',
        'kontener_id',
        'isAdmin'
    ];

    protected $casts = [
        'edzoE' => 'boolean',
        'isAdmin' => 'boolean',
    ];

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

    public function berlesek()
    {
        return $this->hasMany(Berles::class, 'felhasznalo_id');
    }
}