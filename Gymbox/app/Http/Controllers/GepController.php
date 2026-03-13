<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gep;

class GepController extends Controller
{
    public function index(){
        return Gep::all();
    }

    public function getById($id){
        $gep=Gep::find($id);
        if (is_null($gep)) {
            return response()->json(["Hiba!"=>"Nem található gép id!"],404);
        }
        return response($gep,200);
    }

    public function getCheaper($ar)
    {   
        $gep=Gep::where("ar",'<',$ar);
        if ($gep->exists()) {
            return response($gep->get());
        }
        else{
            return response()->json(["Hiba!"=>"Nem található kisebb árral rendelkező gép!"],404);
        }
    }

    public function getMoreExpensive($ar)
    {
        $gep=Gep::where("ar",">",$ar);
        if ($gep->exists()) {
            return response($gep->get());
        }
        else{
            return response()->json(["Hiba!"=>"Nem található nagyobb árral rendelkező gép!"],404);
        }
    }

    public function filterByCateg($kategoria)
    {
        $gep=Gep::where("kategoria","=",$kategoria);
        if ($gep->exists()) {
            return response($gep->get());
        }
        else{
            return response()->json(["Hiba!"=>"Nem található a keresett kategória!"],404);
        }
    }
    

}
