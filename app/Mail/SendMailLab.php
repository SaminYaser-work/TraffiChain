<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        //
        $this->data=$data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        // $userInfo = session()->get('userInfo');
        // $issueID = random_int(0,1000);
        // $this->data['issueID'] = $issueID;
        // $from = $this->data['name'] . '@traffichain.org';

        $subject = $this->data['first'];
        $from = $this->data['email'];

        return $this->from($from)->subject($subject)->view('mail-template2')->with('data', $this->data);
    }
}