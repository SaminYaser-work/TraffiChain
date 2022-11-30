<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckUpdate
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

        $accType = session()->get('accType');

        if($accType == 'driver') {
            $request->validate(
                [
                    'name' => 'required|min:3|string',
                    'nid' => 'required|int|digits:10',
                    'lic' => 'required|int|digits:15',
                    'issue' => 'required|date',
                    'exp' => 'required|date|after:issue',
                ]
            );

            return $next($request);
        }
        else if($accType == 'judge')
        {
            $request->validate(
                [
                    'name' => 'required|min:3|string',
                ]
            );
        }
        else if($accType == 'police')
        {
            $request->validate(
                [
                    'name' => 'required|min:3|string',
                    'nid' => 'required|int|digits:10',
                    'rank' => 'required|string',
                ]
            );
        }
        else{
            dd(session()->all());
        }

        return $next($request);
    }
}