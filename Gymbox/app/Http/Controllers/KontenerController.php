<?php

namespace App\Http\Controllers;

use App\Models\Kontener;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class KontenerController extends Controller
{
    public function index(){
        return Kontener::all();
    }

    public function getById($id){
        $kontener=Kontener::find($id);
        if (is_null($kontener)) {
            return response()->json(["Hiba!"=>"Nem található konténer id!"],404);
        }
        return response($kontener,200);
    }

    public function getBiggerArea($negyzetMeter){
        $kontener=Kontener::where("negyzetMeter",'>',$negyzetMeter);
        if ($kontener->exists()) {
            return response($kontener->get());
        }
        else{
            return response()->json(["Hiba!"=>"Nem található nagyobb négyzetméterű konténer!"],404);
        }
    }

        public function getSmallerArea($negyzetMeter){
        $kontener=Kontener::where("negyzetMeter",'<',$negyzetMeter);
        if ($kontener->exists()) {
            return response($kontener->get());
        }
        else{
            return response()->json(["Hiba!"=>"Nem található kisebb négyzetméterű konténer!"],404);
        }
    }
}
