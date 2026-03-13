<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('csomagok', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kontener')->references('id')->on('kontenerek');
            $table->foreignId('gepcsomag')->references('id')->on('gepcsomagok');
            $table->foreignId('ertekeles')->references('id')->on('ertekelesek');
        });
    }

   
    public function down(): void
    {
        Schema::dropIfExists('csomagok');
    }
};
