<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FelhasznaloController extends Controller
{
    public function index(){
        return Felhasznalo::with('kontener','ertekeles')->get();
    }

    public function getById($id){
        $felhasznalo=Felhasznalo::find($id);
        if (is_null($felhasznalo)) {
            return response()->json(["Hiba!"=>"Nem található felhasználó id!"],404);
        }
        return($felhasznalo);
    }

    public function store(Request $request)
    {
                $validator=Validator::make($request->all(),
                [
                    "nev"=>"required",
                    "email"=>"required",
                    "jelszo"=>"required",
                    "edzoE"=>"required"
                ]
                );

                if($validator->fails())
                {
                    return response()->json(["Hiba üzenet"=>"Hiányzik egy vagy több kötelező adat"],404);
                }
                $felhasznalo=Felhasznalo::create($request->all());
                return response()->json("Sikeres feltöltés!",200);
    }

    public function destroy($id)
    {
        $felhasznalo=Felhasznalo::find($id);
        if (is_null($felhasznalo)) {
            return response()->json(["Hiba!"=>"Nem található felhasználó id!"],404);
        }
        
        $felhasznalo->delete();
        return response("Sikeres törlés",200);
    }

}
