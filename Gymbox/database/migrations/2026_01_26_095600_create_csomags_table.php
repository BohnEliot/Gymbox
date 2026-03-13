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
    $table->foreignId('kontener_id')->constrained('kontenerek');
    $table->foreignId('gepcsomag_id')->constrained('gepcsomagok');
    $table->foreignId('ertekeles_id')->nullable()->constrained('ertekelesek');
    $table->foreignId('edzesterv_id')->nullable()->constrained('edzestervek');
});
    }

   
    public function down(): void
    {
        Schema::dropIfExists('csomagok');
    }
};
