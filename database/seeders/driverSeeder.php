<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class driverSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $reg = Str::uuid()->toString();
        $reg2 = Str::uuid()->toString();

        DB::table('driver')->insert([
            'WALLET_ADDRESS' => '0xF5B9af3C85a317Bc28522a3DDEBf4c73a16996b8',
            'NAME' => 'Samin',
            'NID' => rand(1111111111, 9999999999),
            'LICENSE_NUMBER' => rand(111111111111111, 999999999999999),
            'LICENSE_ISSUE_DATE' => '2021-10-29',
            'LICENSE_EXPIRY_DATE' => '2022-10-29',
            'SCORE' => '50',
        ]);

        DB::table('vehicle')->insert([
            'MODEL' => 'Toyota Supra 1998',
            'CHASSIS_NUMBER' => rand(1111111111, 9999999999),
            'CLASS' => 'sedan',
            'TYPE' => 'civilian',
            'REGISTRATION_NUMBER' => $reg,
        ]);

        DB::table('registered_vehicles')->insert([
            'OWNER_ID' => 1,
            'REGISTRATION_NUMBER' => $reg,
        ]);

        DB::table('vehicle')->insert([
            'MODEL' => 'Lamborghini Aventador 2019',
            'CHASSIS_NUMBER' => rand(1111111111, 9999999999),
            'CLASS' => 'sedan',
            'TYPE' => 'civilian',
            'REGISTRATION_NUMBER' => $reg2,
        ]);

        DB::table('registered_vehicles')->insert([
            'OWNER_ID' => 1,
            'REGISTRATION_NUMBER' => $reg2,
        ]);
    }
}