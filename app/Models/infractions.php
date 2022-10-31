<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class infractions extends Model
{
    use HasFactory;
    protected $table = 'infractions';
    public $timestamps = false;
    // protected $primaryKey = 'CASE_SLIP_NUMBER';
    // protected $keyType = 'string';
    // public $incrementing = false;
    protected $fillable = [
        'CASE_SLIP_NUMBER',
        'INFRACTION_ID',
    ];
}