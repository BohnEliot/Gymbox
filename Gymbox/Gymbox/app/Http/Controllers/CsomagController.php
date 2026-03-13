<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Csomag;
use Illuminate\Support\Facades\Validator;

class CsomagController extends Controller
{
    public function index(){
        return Csomag::with('kontener','ertekeles','gepcsomag')->get();
    }

    public function getById($id){
        $csomag=Csomag::find($id);
        if (is_null($csomag)) {
            return response()->json(["Hiba!"=>"Nem található csomag id!"],404);
        }
        return response($csomag);
    }


     public function store(Request $request)
    {
                $validator=Validator::make($request->all(),
                [
                    "kontener"=>"required",
                    "gepcsomag"=>"required",
                    "ertekeles"=>"required"
                  
                ]
                );

                if($validator->fails())
                {
                    return response()->json(["Hiba üzenet"=>"Hiányzik egy vagy több kötelező adat"],404);
                }
                $Csomag=Csomag::create($request->all());
                return response()->json("Sikeres feltöltés!",200);
    }

    public function destroy($id)
    {
        $csomag=Csomag::find($id);
        if (is_null($csomag)) {
            return response()->json(["Hiba!"=>"Nem található csomag id!"],404);
        }
        
        $csomag->delete();
        return response("Sikeres törlés",200);
    }

}
