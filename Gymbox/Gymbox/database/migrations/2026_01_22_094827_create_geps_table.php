<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('gepek', function (Blueprint $table) {
            $table->id();
            $table->string("nev");
            $table->integer("ar");
            $table->string("marka");
            $table->string("kategoria");
            $table->integer("gepSuly");
            $table->double("gepHossz");
            $table->double("gepSzelesseg");
            $table->double("gepMagassag");

        });
    }

  
    public function down(): void
    {
        Schema::dropIfExists('gepek');
    }
};
