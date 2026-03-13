<?php

namespace App\Http\Controllers;

use App\Models\Ertekeles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ErtekelesController extends Controller
{
    public function index(){
        return Ertekeles::all();
    }

    public function getById($id){
        $ertekeles=Ertekeles::Find($id);
        if (is_null($ertekeles)) {
            return response()->json(["Hiba!"=>"Nem található értékelés id!"],404);
        }

        return response($ertekeles,200);
    }

    

}
