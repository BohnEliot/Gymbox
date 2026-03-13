<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('berlesek', function (Blueprint $table) {
            $table->id();
            $table->foreignId('csomag')->references('id')->on('csomagok');
            $table->integer('berlesiIdo');
            $table->integer('ar');
        });
    }

   
    public function down(): void
    {
        Schema::dropIfExists('berlesek');
    }
};
