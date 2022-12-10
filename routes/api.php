<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MailController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Lab
Route::get('get-drivers', [RegController::class, 'getAllDrivers']);
Route::get('get-polices', [RegController::class, 'getAllPolices']);
Route::get('get-judges', [RegController::class, 'getAllJudges']);
Route::post('create-driver', [RegController::class, 'regDriver']);

// APIs
Route::get('accType', [ProfileController::class, 'getAccType']);
Route::post('getScoreComment', [ProfileController::class, 'scoreComment']);
Route::post('submit-issue', [MailController::class, 'send']);
Route::post('reg-vehicle', [ProfileController::class, 'registerVehicle']);