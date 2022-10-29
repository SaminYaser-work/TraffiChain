<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class driver extends Model
{
    use HasFactory;
    protected $table = 'driver';
    public $timestamps = false;
    // protected $primaryKey = 'WALLET_ADDRESS';
    // protected $keyType = 'string';
    // public $incrementing = false;
    protected $fillable = [
        'WALLET_ADDRESS',
        'NAME',
        'NID',
        'LICENSE_NUMBER',
        'LICENSE_ISSUE_DATE',
        'LICENSE_EXPIRE_DATE',
        'SCORE',
    ];
}