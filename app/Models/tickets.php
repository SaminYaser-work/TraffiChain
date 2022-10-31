<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tickets extends Model
{
    use HasFactory;
    protected $table = 'tickets';
    public $timestamps = false;
    // protected $primaryKey = 'CASE_SLIP_NUMBER';
    // protected $keyType = 'string';
    // public $incrementing = false;
    protected $fillable = [
        'CASE_SLIP_NUMBER',
        'STATUS',
        'DRIVER_WALLET_ADDRESS',
        'POLICE_WALLET_ADDRESS',
        'JUDGE_WALLET_ADDRESS',
        'DUE_DATE',
    ];
}