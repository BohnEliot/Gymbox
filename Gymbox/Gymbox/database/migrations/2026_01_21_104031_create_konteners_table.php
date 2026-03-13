<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('kontenerek', function (Blueprint $table) {
            $table->id();
            $table->string('kontenerNev');
            $table->integer('sulyKG');
            $table->double('belSzelesseg');
            $table->double('kulSzelesseg');
            $table->double('belMagassag');
            $table->double('belHosszusag');
            $table->double('kulMagassag');
            $table->double('kulHosszusag');
            $table->double('negyzetMeter');
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('kontenerek');
    }
};
