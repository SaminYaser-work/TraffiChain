<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class judge extends Model
{
    use HasFactory;
    protected $table = 'judge';
    public $timestamps = false;
    // protected $primaryKey = 'CASE_SLIP_NUMBER';
    // protected $keyType = 'string';
    // public $incrementing = false;
    protected $fillable = [
        'WALLET_ADDRESS',
        'NAME',
    ];
}