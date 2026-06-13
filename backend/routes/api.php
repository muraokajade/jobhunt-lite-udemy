<?php

use Illuminate\Support\Facades\Route;

//hello API
Route::get("/hello", function () {
    return response()->json([
        "message" => "Hello JobHunt Lite API",
    ]);
});
