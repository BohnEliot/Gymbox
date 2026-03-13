<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('gepcsomagok', function (Blueprint $table) {
            $table->id();
            $table->foreignId('gepId1')->references('id')->on('gepek');
            $table->foreignId('gepId2')->references('id')->on('gepek');
            $table->foreignId('gepId3')->references('id')->on('gepek');
            $table->foreignId('gepId4')->references('id')->on('gepek');
            $table->foreignId('gepId5')->references('id')->on('gepek');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gepcsomagok');
    }
};
