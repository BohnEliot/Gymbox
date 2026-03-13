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
    $table->string('email')->unique();
    $table->string('jelszo');
    $table->boolean('edzoE');
    $table->foreignId('ertekeles_id')->nullable()->constrained('ertekelesek');
    $table->foreignId('kontener_id')->nullable()->constrained('kontenerek');
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
