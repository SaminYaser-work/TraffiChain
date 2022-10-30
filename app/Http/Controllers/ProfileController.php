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

        if ($userInfo) {
            $vehicleInfo = DB::table('vehicle')
                ->join('registered_vehicles', 'vehicle.REGISTRATION_NUMBER', '=', 'registered_vehicles.REGISTRATION_NUMBER')
                ->where('registered_vehicles.OWNER_ID', $userInfo->id)
                ->get();

            return view('profile.PDriver')
                ->with('userInfo', $userInfo)
                ->with('vehicleInfo', $vehicleInfo);
        } else {
            // TODO: flash message at login page (You need to login first)
            return redirect('login');
        }
    }

    function updateProfile(Request $request)
    {

        // validate
        $request->validate(
            [
                'first_name' => 'required|min:3|string',
                'last_name' => 'required|min:3|string',
                'age' => 'required|min:18|numeric',
                'mobile' => 'required|min:11|max:11',
                'company' => 'required|min:5|string',
                // 'img' => 'image'
            ],
            [
                'fisrt_name.required' => 'Please input your first name',
                'first_name.min' => 'Enter 3 characters minimum',

                'last_name.required' => 'Please input your last name',
                'last_name.min' => 'Enter 3 characters minimum',

                'age.required' => 'Please input your age',
                'age.min' => 'You must be above to 18 to register',

                'mobile.required' => 'Please input your mobile',
                'mobile.min' => 'Mobile number must be exactly 11 digits long',
                'mobile.max' => 'Mobile number must be exactly 11 digits long',

                'company.required' => 'Please input your company',
                'company.min' => 'Company name must be at least 5 characters long',

                // 'img.required' => 'Please select a picture for your profile',
                // 'img.image' => 'Please upload a image file',
                // 'img.mimetypes' => 'Please select a valid image file',
            ]
        );

        $userInfo = session()->get('userInfo');

        if ($userInfo) {

            $info = agents::where('id', $userInfo['id'])->first();

            $info->first_name = $request->first_name;
            $info->last_name = $request->last_name;
            $info->age = $request->age;
            $info->mobile = $request->mobile;
            $info->company = $request->company;
            $info->save();

            $userInfo['first_name'] = $request->first_name;
            $userInfo['last_name'] = $request->last_name;
            $userInfo['age'] = $request->age;
            $userInfo['mobile'] = $request->mobile;
            $userInfo['company'] = $request->company;

            session()->put('userInfo', $userInfo);

            return view('profile', $userInfo + ['updateSuccess' => true]);
        } else {
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

    function registerVehicle(Request $request)
    {
        $request->validate(
            [
                'model' => 'required|min:3|string',
                // 'chassis' => 'required|digits:10|string|unique:App/Models/vehicle,CHASSIS_NUMBER', // TODO: check if unique
                'chassis' => 'required|digits:10|string',
                'class' => 'required|string',
                'type' => 'required|string',
            ]
        );

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
        return redirect('profile');

    }

}