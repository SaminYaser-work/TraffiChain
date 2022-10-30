<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class registered_vehicles extends Model
{
    use HasFactory;
    protected $table = 'registered_vehicles';
    public $timestamps = false;
    protected $fillable = [
        'OWNER_ID',
        'REGISTRATION_NUMBER',
    ];
}