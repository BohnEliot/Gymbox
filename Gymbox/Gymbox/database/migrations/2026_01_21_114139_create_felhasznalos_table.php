<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('felhasznalok', function (Blueprint $table) {
            $table->id();
            $table->string('nev');
            $table->string('email');
            $table->string('jelszo');
            $table->boolean('edzoE');
            $table->foreignId('ertekeles')->references('id')->on('ertekelesek');
            $table->foreignId('kontener')->references('id')->on('kontenerek');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('felhasznalok');
    }
};
