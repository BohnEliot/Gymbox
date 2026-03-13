<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('edzestervek', function (Blueprint $table) {
    $table->id();
    $table->foreignId('felhasznalo_id')->constrained('felhasznalok')->cascadeOnDelete();
    $table->string("megjegyzes")->nullable();
    $table->string('hetfo');
    $table->string('kedd');
    $table->string('szerda');
    $table->string('csutortok');
    $table->string('pentek');
    $table->string('szombat');
    $table->string('vasarnap');
});
    }


    public function down(): void
    {
        Schema::dropIfExists('edzestervek');
    }
};
