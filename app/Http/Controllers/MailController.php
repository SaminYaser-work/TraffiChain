<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class MailController extends Controller
{

    function index()
    {
        return view('profile.driver.support');
    }

    function send(Request $request)
    {
        $admin="support@traffichain.org";

        $data = array(
            'issues' => $request->issues,
            'message' => $request->message,
            'name' => $request->name,
            'nid' => $request->nid,
        );

        Mail::to($admin)->send(new SendMail($data));

        return redirect('/profile/support')->with('success', 'Your issue has been submitted.');
    }
}