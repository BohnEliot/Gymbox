<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('berlesek', function (Blueprint $table) {
            $table->foreignId('felhasznalo_id')
                ->nullable()
                ->after('id')
                ->constrained('felhasznalok')
                ->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('berlesek', function (Blueprint $table) {
            $table->dropForeign(['felhasznalo_id']);
            $table->dropColumn('felhasznalo_id');
        });
    }
};