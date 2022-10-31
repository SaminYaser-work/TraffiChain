<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\driver;

class RegController extends Controller
{
    private $data;

    function __construct()
    {
        // Label values
        $this->data = [
            'first_name' => 'Your first name',
            'last_name' => 'Your last name',
            'age' => 'Your age',
            'company' => 'Your company name',
            'mobile' => '017XXXXXXXX'
        ];
    }

    function register()
    {
        return view('register.sel');
    }

    function driverReg()
    {
        $this->data['type'] = 'driver';
        session()->put('regType', 'driver');
        return view('register.driver', $this->data);
    }

    function policeReg()
    {
        $this->data['type'] = 'police';
        session()->put('regType', 'police');
        return view('register.police', $this->data);
    }

    function judgeReg()
    {
        $this->data['type'] = 'judge';
        session()->put('regType', 'judge');
        return view('register.judge', $this->data);
    }

    function doRegistration(Request $request)
    {
        $regType = session()->pull('regType');

        if (!$regType) {
            return dd(session()->all());
        }

        // TODO: add other entities
        if ($regType == 'driver'){
            $driver = new driver();
            $driver->WALLET_ADDRESS = $request->walletAddress;
            $driver->NAME = $request->name;
            $driver->NID = $request->nid;
            $driver->LICENSE_NUMBER = $request->lic;
            $driver->LICENSE_ISSUE_DATE = $request->issue;
            $driver->LICENSE_EXPIRY_DATE = $request->exp;

            // TODO: Generate scoring algorithm
            $driver->SCORE = rand(0, 100);

            $driver->save();
        }

        session()->flash('newAccount', true);

        return redirect('/login');
    }
}