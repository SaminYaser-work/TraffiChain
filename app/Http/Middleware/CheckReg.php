<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckReg
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {

        $regType = session()->get('regType');

        if (!$regType) {
            return print_r(session()->all());
        }

        if ($regType == 'driver'){
            $request->validate(
                [
                    'name' => 'required|min:3|string',
                    'nid' => 'required|int|digits:10|unique:App\Models\driver,NID',
                    'lic' => 'required|int|digits:15|unique:App\Models\driver,LICENSE_NUMBER',
                    'issue' => 'required|date',
                    'exp' => 'required|date|after:issue',
                    'walletAddress' => 'required|string|unique:App\Models\driver,WALLET_ADDRESS',
                ]

            );

            return $next($request);
        }
        else if ($regType == 'judge') {
            $request->validate(
                [
                    'name' => 'required|min:3|string',
                    'walletAddress' => 'required|string|unique:App\Models\judge,WALLET_ADDRESS',
                ]
            );

            return $next($request);
        }
        else if($regType == 'police'){
            $request->validate(
                [
                    'name' => 'required|min:3|string',
                    'walletAddress' => 'required|string|unique:App\Models\police,WALLET_ADDRESS',
                    'station' => 'required|string',
                    'rank' => 'required|string',
                    'badge' => 'required|int|digits:5|unique:App\Models\police,BADGE_NUMBER',
                ]
            );

            return $next($request);
        }

        else{
            return redirect('home');
        }

    }
}