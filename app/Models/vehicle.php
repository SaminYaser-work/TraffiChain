<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vehicle extends Model
{
    use HasFactory;
    protected $table = 'vehicle';
    public $timestamps = false;
    // protected $primaryKey = 'WALLET_ADDRESS';
    // protected $keyType = 'string';
    // public $incrementing = false;
    protected $fillable = [
        'MODEL',
        'CHASSIS_NUMBER',
        'STATUS',
        'CLASS',
        'TYPE',
        'REGISTRATION_NUMBER',
    ];
}
