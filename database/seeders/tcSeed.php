<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class tcSeed extends Seeder
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
        $wallet =  '0xF5B9af3C85a317Bc28522a3DDEBf4c73a16996b8';
        $cop_wallet1 = '0x81a741D43F8A8A0576dcAf254E271C09841D9bbA';

        // Fines (MUST BE FILLED)
        // TODO: Add description from https://dmp.gov.bd/penalties-under-motor-vehicle-ordinance/
        $fines = [
            137 => 200,
            139 => 100,
            140 => 400,
            141 => 200,
            142 => 300,
            146 => 500,
            149 => 250,
            150 => 200,
            151 => 2000,
            152 => 1500,
            153 => 500,
            154 => 1000,
            155 => 750,
            156 => 750,
            157 => 500,
            158 => 500,
        ];

        foreach($fines as $key => $value) {
            DB::table('fines')->insert([
                'INFRACTION_ID' => $key,
                'FINE_AMOUNT' => $value,
            ]);
        }

        DB::table('driver')->insert([
            'WALLET_ADDRESS' => $wallet,
            'NAME' => 'Samin',
            'NID' => '1111111111',
            'LICENSE_NUMBER' => '111111111111111',
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

        $caseSlipNumber = Str::uuid();

        DB::table('tickets')->insert([
            'CASE_SLIP_NUMBER' => $caseSlipNumber,
            'STATUS' => 'PENDING',
            'DRIVER_WALLET_ADDRESS' => $wallet,
            'POLICE_WALLET_ADDRESS' => $cop_wallet1,
            'DUE_DATE' => '2021-10-29',
        ]);

        DB::table('infractions')->insert(
            [
                'CASE_SLIP_NUMBER' => $caseSlipNumber,
                'INFRACTION_ID' => 141,
            ],
        );

        DB::table('infractions')->insert(
            [
                'CASE_SLIP_NUMBER' => $caseSlipNumber,
                'INFRACTION_ID' => 156,
            ],
        );

        DB::table('judge')->insert([
            'WALLET_ADDRESS' => '0x7296f61f990CbA99c3aeFbC5F38208F857830256',
            'NAME' => 'Abu Hanifa',
        ]);

        DB::table('police')->insert([
            'WALLET_ADDRESS' => "0x81a741D43F8A8A0576dcAf254E271C09841D9bbA",
            'NAME' => "RoboCop",
            'STATION' => "Detroit Police Department",
            'RANK' => "Detective",
            'BADGE_NUMBER' => "59524",
            'SCORE' => 100,
        ]);

    }
}
