<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\RegController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/home');
});


// Home
Route::get('/home', [PageController::class, 'home']);
Route::get('/home/{age}', [PageController::class, 'setAge']);


// Registration
Route::get('/register', [RegController::class, 'register']);
Route::get('/register/driver', [RegController::class, 'driverReg']);
Route::get('/register/police', [RegController::class, 'policeReg']);
Route::get('/register/judge', [RegController::class, 'judgeReg']);
Route::post('/register', [RegController::class, 'doRegistration'])
    ->middleware('checkReg');

// Login
Route::get('/login', [LoginController::class, 'login']);
Route::get('/logout', [LoginController::class, 'logout']);
Route::get('/login/driver', [LoginController::class, 'login']);
Route::get('/login/police', [LoginController::class, 'login']);
Route::get('/login/judge', [LoginController::class, 'login']);
Route::post('/login', [LoginController::class, 'doLogin']);

// Profile
Route::get('/profile', [ProfileController::class, 'showProfile'])
    ->middleware('checkLogin');

Route::get('/profile/tickets', [ProfileController::class, 'showTickets']);
Route::get('/profile/vehicle', [ProfileController::class, 'registerVehicleForm']);
Route::get('/profile/update', [ProfileController::class, 'updateProfileForm']);
Route::get('/profile/issue-ticket', [ProfileController::class, 'issueTicket']);
Route::post('/profile/update', [ProfileController::class, 'updateProfile'])
    ->middleware('checkUpdate');
Route::post('/profile/vehicle', [ProfileController::class, 'registerVehicle']);

Route::post('/update', [ProfileController::class, 'updateProfile']);

// TODO: Add custom 404 view
Route::fallback(function () {
    redirect('/');
});

// TODO: For debugging, remove this in production
Route::get('/loggedin', [LoginController::class, 'showInfo']);