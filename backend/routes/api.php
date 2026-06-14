<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CompanyController;

//hello API
Route::get("/hello", function () {
    return response()->json([
        "message" => "Hello JobHunt Lite API",
    ]);
});

Route::apiResource('companies', CompanyController::class);