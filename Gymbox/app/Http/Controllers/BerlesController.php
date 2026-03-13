<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Berles;
use Illuminate\Support\Facades\Validator;

class BerlesController extends Controller
{
    public function index(){
        return Berles::with('csomag')->get();
    }

    public function getById($id){
        $berles=Berles::find($id);
        if (is_null($berles)) {
            return response()->json(["Hiba!"=>"Nem található bérlés id!"],404);
        }
        return($berles);
    }

    public function store(Request $request)
    {
                $validator=Validator::make($request->all(),
                [
                    "csomag"=>"required",
                    "berlesiIdo"=>"required",
                    "ar"=>"required"
                    
                ]
                );

                if($validator->fails())
                {
                    return response()->json(["Hiba üzenet!:"=>"Hiányzik egy vagy több kötelező adat"],404);
                }
                $berles=Berles::create($request->all());
                return response()->json("Sikeres feltöltés!",200);
    }

    public function update(Request $request,$id)
    {
        $berles=Berles::find($id);
        if (is_null($berles)) {
            return response()->json(["Hiba üzenet!:"=>"Nem található bérlés id!"]);
        }

        $validator=Validator::make($request->all(),
                [
                    "csomag"=>"required",
                    "berlesiIdo"=>"required",
                    "ar"=>"required"
                    
                ]
                );

         if($validator->fails())
                {
                    return response()->json(["Hiba üzenet!:"=>"Hiányzik egy vagy több kötelező adat"],404);
                }

        $berles->update($request->all());
        return response()->json(["Sikeres frissítés!"],200);
    }

    public function destroy($id)
    {
        $berles=Berles::find($id);
        if (is_null($berles)) {
            return response()->json(["Hiba!"=>"Nem található bérlés id!"],404);
        }
        
        $berles->delete();
        return response("Sikeres törlés",200);
    }

    
}
