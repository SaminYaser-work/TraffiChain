<?php

namespace App\Http\Controllers;

use App\Models\agents;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{

    private $labels;

    function __construct()
    {
        $this->labels = [
            'mobile' => 'Your mobile no.',
            'company' => 'Your company name'
        ];
    }

    function login()
    {
        return view('login.sel');


    }

    function driverLogin()
    {
        $this->labels['type'] = 'driver';
        return view('login.driver', $this->labels);
    }

    function doLogin(Request $request)
    {

        // $request->session()->flush();
        $accType = $request->accType;
        $data = DB::table($accType)->where('WALLET_ADDRESS', $request->walletAddress)->first();

        if ($data) {

            $request->session()->put('accType', $accType);
            $request->session()->put('userInfo', $data);

            return redirect('/profile');
        } else {
            session()->flash('showError', true);
            return view('login.sel');
        }
    }

    function logout() {
        session()->forget('userInfo');
        session()->forget('accType');
        session()->forget('vehicleInfo');
        session()->put('_previous', url('login'));
        return redirect('login');
    }

    // Delete this function
    function showInfo()
    {
        $data = DB::table('users')->get();

        return view('loggedin')
            ->with('data', $data);
    }
}
