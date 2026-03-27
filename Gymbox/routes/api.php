<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ErtekelesController;
use App\Http\Controllers\KontenerController;
use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\GepController;
use App\Http\Controllers\GepcsomagController;
use App\Http\Controllers\CsomagController;
use App\Http\Controllers\BerlesController;
use App\Http\Controllers\EdzestervController;



Route::get('/ertekeles',[ErtekelesController::class,'index']);
Route::get('/ertekeles/{id}',[ErtekelesController::class,'getById']);

Route::get('/kontener',[KontenerController::class,'index']);
Route::get('/kontener/{id}',[KontenerController::class,'getById']);
Route::get('/kontener/biggerarea/{negyzetMeter}',[KontenerController::class,'getBiggerArea']);
Route::get('/kontener/smallerarea/{negyzetMeter}',[KontenerController::class,'getSmallerArea']);

Route::get('/felhasznalo',[FelhasznaloController::class,'index']);
Route::get('/felhasznalo/{id}',[FelhasznaloController::class,'getById']);
Route::get('/edzok-edzestervek', [FelhasznaloController::class, 'edzokEdzestervekkel']);
Route::post('/felhasznalo',[FelhasznaloController::class,'store']);
Route::put('/felhasznalo/{id}',[FelhasznaloController::class,'update']);
Route::delete('/felhasznalo/{id}',[FelhasznaloController::class,'destroy']);
Route::post('/login', [FelhasznaloController::class, 'login']);

Route::get('/gep',[GepController::class,'index']);
Route::get('/gep/{id}',[GepController::class,'getById']);
Route::get('/gep/cheaper/{ar}',[GepController::class,'getCheaper']);
Route::get('/gep/expensive/{ar}',[GepController::class,'getMoreExpensive']);
Route::get('/gep/categ/{kategoria}',[GepController::class,'filterByCateg']);

Route::get('/gepcsomag',[GepcsomagController::class,'index']);
Route::get('/gepcsomag/{id}',[GepcsomagController::class,'getById']);

Route::get('/edzesterv', [EdzestervController::class, 'index']);
Route::get('/edzesterv/{id}', [EdzestervController::class, 'getById']);
Route::post('/edzesterv', [EdzestervController::class, 'store']);
Route::delete('/edzesterv/{id}', [EdzestervController::class, 'destroy']);

Route::get('/csomag',[CsomagController::class,'index']);
Route::get('/csomag/{id}',[CsomagController::class,'getById']);
Route::post('/csomag',[CsomagController::class,'store']);
Route::delete('/csomag/{id}',[CsomagController::class,'destroy']);

Route::get('/berles',[BerlesController::class,'index']);
Route::get('/berles/{id}',[BerlesController::class,'getById']);
Route::post('/berles',[BerlesController::class,'store']);
Route::delete('/berles/{id}',[BerlesController::class,'destroy']);
Route::get('/felhasznalo/{id}/berlesek', [BerlesController::class, 'userBerlesek']);
Route::patch('/berles/{id}/status', [BerlesController::class, 'updateStatus']);






