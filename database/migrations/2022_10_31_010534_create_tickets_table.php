<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->uuid('CASE_SLIP_NUMBER');
            $table->string('DRIVER_WALLET_ADDRESS');
            $table->string('POLICE_WALLET_ADDRESS');
            $table->string('JUDGE_WALLET_ADDRESS')->nullable();
            $table->string('STATUS');
            $table->date('DUE_DATE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
}