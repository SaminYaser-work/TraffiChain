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

        $request->validate(
            [
                'name' => 'required|min:3|string',
                'nid' => 'required|int|digits:10',
                'lic' => 'required|int|digits:15',
                'issue' => 'required|date',
                'exp' => 'required|date|after:issue',
                'walletAddress' => 'required|string',
            ]
        );
        return $next($request);
    }
}