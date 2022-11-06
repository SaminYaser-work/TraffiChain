<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class police extends Model
{
    use HasFactory;
    protected $table = 'police';
    public $timestamps = false;
    protected $fillable = [
        'WALLET_ADDRESS',
        'NAME',
        'STATION',
        'RANK',
        'BADGE_NUMBER',
        'SCORE',
    ];
}