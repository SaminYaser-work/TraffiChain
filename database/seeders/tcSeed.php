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

        DB::table('driver')->insert([
            'WALLET_ADDRESS' => $wallet,
            'NAME' => 'Samin',
            'NID' => rand(1111111111, 9999999999),
            'LICENSE_NUMBER' => rand(111111111111111, 999999999999999),
            'LICENSE_ISSUE_DATE' => '2021-10-29',
            'LICENSE_EXPIRY_DATE' => '2022-10-29',
            'SCORE' => '50',
        ]);

        // DB::table('vehicle')->insert([
        //     'MODEL' => 'Toyota Supra 1998',
        //     'CHASSIS_NUMBER' => rand(1111111111, 9999999999),
        //     'CLASS' => 'sedan',
        //     'TYPE' => 'civilian',
        //     'REGISTRATION_NUMBER' => $reg,
        // ]);

        // DB::table('registered_vehicles')->insert([
        //     'OWNER_ID' => 1,
        //     'REGISTRATION_NUMBER' => $reg,
        // ]);

        // DB::table('vehicle')->insert([
        //     'MODEL' => 'Lamborghini Aventador 2019',
        //     'CHASSIS_NUMBER' => rand(1111111111, 9999999999),
        //     'CLASS' => 'sedan',
        //     'TYPE' => 'civilian',
        //     'REGISTRATION_NUMBER' => $reg2,
        // ]);

        // DB::table('registered_vehicles')->insert([
        //     'OWNER_ID' => 1,
        //     'REGISTRATION_NUMBER' => $reg2,
        // ]);

        // $caseSlipNumber = Str::uuid();

        // DB::table('tickets')->insert([
        //     'CASE_SLIP_NUMBER' => $caseSlipNumber,
        //     'STATUS' => 'PENDING',
        //     'DRIVER_WALLET_ADDRESS' => $wallet,
        //     'POLICE_WALLET_ADDRESS' => $cop_wallet1,
        //     'FINE_AMOUNT' => rand(100, 1000),
        //     'DUE_DATE' => '2021-10-29',
        // ]);

        // DB::table('infractions')->insert(
        //     [
        //         'CASE_SLIP_NUMBER' => $caseSlipNumber,
        //         'INFRACTION_ID' => 101,
        //     ],
        // );

        // DB::table('infractions')->insert(
        //     [
        //         'CASE_SLIP_NUMBER' => $caseSlipNumber,
        //         'INFRACTION_ID' => 102,
        //     ],
        // );

    }
}