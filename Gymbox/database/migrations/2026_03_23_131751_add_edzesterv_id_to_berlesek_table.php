<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  public function up(): void
{
    Schema::table('berlesek', function (Blueprint $table) {
        $table->foreignId('edzesterv_id')->nullable()->constrained('edzestervek')->nullOnDelete();
    });
}

public function down(): void
{
    Schema::table('berlesek', function (Blueprint $table) {
        $table->dropForeign(['edzesterv_id']);
        $table->dropColumn('edzesterv_id');
    });
}
};
