<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\vehicle;
use App\Models\registered_vehicles;
use App\Models\vehicle_reg_application;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{

    function autheticate()
    {
        $userInfo = session()->get('userInfo');

        return $userInfo ? $userInfo : false;
    }

    function showProfile()
    {
        $userInfo = $this->autheticate();
        $accType = session()->get('accType');

        if($accType == 'driver') {
            if ($userInfo) {
                $vehicleInfo = DB::table('vehicle')
                    ->join('registered_vehicles', 'vehicle.REGISTRATION_NUMBER', '=', 'registered_vehicles.REGISTRATION_NUMBER')
                    ->where('registered_vehicles.OWNER_ID', $userInfo->id)
                    ->get();

                $ticketInfo = DB::table('tickets')
                    ->where('DRIVER_WALLET_ADDRESS', $userInfo->WALLET_ADDRESS)
                    ->get();

                return view('profile.driver.PDriver')
                    ->with('userInfo', $userInfo)
                    ->with('vehicleInfo', $vehicleInfo)
                    ->with('ticketInfo', $ticketInfo);
            } else {
                // TODO: flash message at login page (You need to login first)
                return redirect('login');
            }
        }
        else if ($accType == 'judge') {
            if ($userInfo) {
                return view('profile.judge.PJudge')
                    ->with('userInfo', $userInfo);
            } else {
                // TODO: flash message at login page (You need to login first)
                return redirect('login');
            }
        }
        else if($accType == 'police') {
            if ($userInfo) {
                return view('profile.police.PPolice')
                    ->with('userInfo', $userInfo);
            } else {
                // TODO: flash message at login page (You need to login first)
                return redirect('login');
            }
        }
    }

    //API
    function getDriverInfo(Request $req) {
        $data = DB::table('driver')->where('id', $req->id)->first();
        return $data;
    }

    function getVehicleInfo(Request $req) {
        $vehicleInfo = DB::table('vehicle')
        ->join('registered_vehicles', 'vehicle.REGISTRATION_NUMBER', '=', 'registered_vehicles.REGISTRATION_NUMBER')
        ->where('registered_vehicles.OWNER_ID', $req->id)
        ->get();

        return $vehicleInfo;
    }

    function getFooter() {
        return "TraffiChain™";
    }

    function getRegText() {
        $data = [
            [
                'title' => '🚘 Driver',
                'text' => 'Register as a driver or owner, add your vehicle, see active tickets, and more.',
                'link' => '/register/driver'
            ],
            [
                'title' => '👮 Police',
                'text' => 'Register as a police officer, see issued tickets, and more.',
                'link' => '/register/police'
            ],
            [
                'title' => '🧑‍⚖️ Judge',
                'text' => 'Register as a judge, manage ongoing cases, and more.',
                'link' => '/register/judge'
            ]
        ];

        return $data;

    }

    function issueTicket() {
        $userInfo = $this->autheticate();

        if($userInfo) {
            return view('profile.police.issueTicket')
                ->with('userInfo', $userInfo);
        } else {
            // TODO: flash message at login page (You need to login first)
            return redirect('login');
        }
    }


    function registerVehicleForm()
    {
        $userInfo = $this->autheticate();

        if ($userInfo) {
            return view('profile.driver.registerVehicle')
                ->with('userInfo', $userInfo);
        }
        return redirect('login');
    }

    // API
    function getProfileInfo(Request $req) {
        $data = DB::table('driver')->where('id', $req->id)->first();
        return $data;
    }

    // API
    function getAccType()
    {
        $accType = session()->get('accType');

        return $accType;
    }

    // API
    function scoreComment(Request $req) {
        $score = $req->score;

        $data = ['comment' => '', 'color' => '', 'score' => $score];

        if ($score == 100) {
            $data['comment'] = 'You are an excellent driver';
            $data['color'] = 'text-green-400';
        } else if ($score >= 80) {
            $data['comment'] = 'You are a great driver';
            $data['color'] = 'text-green-400';
        } else if ($score >= 60) {
            $data['comment'] = 'You are a good driver';
            $data['color'] = 'text-yellow-400';
        } else if ($score >= 40) {
            $data['comment'] = 'Your driving skills are below average';
            $data['color'] = 'text-orange-500';
        } else if ($score >= 20) {
            $data['comment'] = 'Improve your score or your license will be revoked';
            $data['color'] = 'text-red-500';
        } else {
            $data['comment'] = 'what';
            $data['color'] = 'what';
        }

        return $data;
    }

    // API
    function registerVehicle(Request $request)
    {
        // $request->validate(
        //     [
        //         'model' => 'required|min:3|string',
        //         // 'chassis' => 'required|digits:10|string|unique:App/Models/vehicle,CHASSIS_NUMBER', // TODO: check if unique
        //         'chassis' => 'required|digits:10|string',
        //         'class' => 'required|string',
        //         'type' => 'required|string',
        //     ]
        // );

        $uuid = Str::uuid()->toString();

        $vehicle = new vehicle();
        $vehicle->CHASSIS_NUMBER = $request->chassis;
        $vehicle->MODEL = $request->model;
        $vehicle->CLASS = $request->class;
        $vehicle->TYPE = $request->type;
        $vehicle->REGISTRATION_NUMBER = $uuid;
        $vehicle->save();

        $reg = new registered_vehicles();
        $reg->OWNER_ID = session()->get('userInfo')->id;
        $reg->REGISTRATION_NUMBER = $uuid;
        $reg->save();

        // TODO: Flash application submitted alert
        // return redirect('profile');
    }

    function updateProfileForm()
    {
        $userInfo = $this->autheticate();

        if ($userInfo) {

            $accType = session()->get('accType');

            if($accType == 'driver') {
                return view('profile.driver.updateDriver')
                    ->with('userInfo', $userInfo);
            }
            elseif($accType == 'police') {
                return view('profile.police.updatePolice')
                    ->with('userInfo', $userInfo);
            }
            elseif($accType == 'judge') {
                return view('profile.judge.updateJudge')
                    ->with('userInfo', $userInfo);
            }
            else {
                return redirect('profile');
            }

        }
        return redirect('login');
    }

    function updateProfile(Request $request)
    {
        // $accType = session()->get('accType');
        $accType = $request->accType;

        if($accType == 'driver')
        {
            $info = DB::table('driver')
                ->where('id', $request->id)
                ->update([
                    'NAME' => $request->NAME,
                    'NID' => $request->NID,
                    'LICENSE_NUMBER' => $request->LICENSE_NUMBER,
                    'LICENSE_ISSUE_DATE' => $request->LICENSE_ISSUE_DATE,
                    'LICENSE_EXPIRY_DATE' => $request->LICENSE_EXPIRY_DATE,
                ]);
        }
        else if ($accType == 'police')
        {
            $info = DB::table('police')
                ->where('id', session()->get('userInfo')->id)
                ->update([
                    'NAME' => $request->name,
                    'NID' => $request->nid,
                    'RANK' => $request->rank,
                ]);


        }
        else if($accType == 'judge')
        {
            $info = DB::table('judge')
                ->where('id', session()->get('userInfo')->id)
                ->update([
                    'NAME' => $request->name,
                ]);
        }
        else{
            dd('error');
        }

        $userInfo = DB::table($accType)
            ->where('id', $request->id)
            ->first();

        session()->put('userInfo', $userInfo);

        // session()->flash('infoChangeSuccess', true);
        // return redirect('profile/update');
        return response('epic');
    }

    function showTickets()
    {
        $userInfo = $this->autheticate();
        $accType = session()->get('accType');

        if($accType == 'driver'){
            if ($userInfo) {
                $ticketInfo = DB::table('tickets')
                    ->where('DRIVER_WALLET_ADDRESS', $userInfo->WALLET_ADDRESS)
                    ->get();

                // Calculating fine amount
                foreach($ticketInfo as $ticket) {
                    // $ticket->ISSUE_DATE = date('d-m-Y', strtotime($ticket->ISSUE_DATE));
                    // $ticket->EXPIRY_DATE = date('d-m-Y', strtotime($ticket->EXPIRY_DATE));
                    $infractions = DB::table('infractions')
                        ->where('CASE_SLIP_NUMBER', $ticket->CASE_SLIP_NUMBER)
                        ->get();

                    $totalFine = 0;
                    foreach($infractions as $infraction) {

                        $fine = DB::table('fines')
                            ->where('INFRACTION_ID', $infraction->INFRACTION_ID)
                            ->first()->FINE_AMOUNT;

                        if($fine) {
                            $totalFine += $fine;
                        }
                        else {
                            $totalFine += 0;
                        }
                    }
                    $ticket->FINE_AMOUNT = $totalFine;

                }

                return view('profile.driver.citedTickets')
                    ->with('userInfo', $userInfo)
                    ->with('ticketInfo', $ticketInfo);
            } else {
                return redirect('login');
            }
        }
        else if ($accType == 'judge')
        {
            return view('profile.judge.disputingTickets')
                ->with('userInfo', $userInfo);
        }
    }
}