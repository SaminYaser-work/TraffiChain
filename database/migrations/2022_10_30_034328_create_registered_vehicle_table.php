<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegisteredVehicleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registered_vehicles', function (Blueprint $table) {
            $table->id();
            $table->integer('OWNER_ID');
            $table->string('REGISTRATION_NUMBER');
            $table->string('STATUS')->default('PENDING');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('registered_vehicle');
    }
}