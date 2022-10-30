<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDriverTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('driver', function (Blueprint $table) {
            $table->id();
            $table->string('WALLET_ADDRESS', 200);
            $table->string('NAME', 100);
            $table->bigInteger('NID')->unique();
            $table->bigInteger('LICENSE_NUMBER')->unique();
            $table->date('LICENSE_ISSUE_DATE');
            $table->date('LICENSE_EXPIRY_DATE');
            $table->integer('SCORE')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('driver');
    }
}
