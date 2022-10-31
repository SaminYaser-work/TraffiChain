<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class fines extends Model
{
    use HasFactory;
    protected $table = 'fines';
    public $timestamps = false;
}