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
    $validator = Validator::make($request->all(), [
        "nev" => "required",
        "email" => "required|email|unique:felhasznalok,email",
        "jelszo" => "required",
        "edzoE" => "required|boolean"
    ]);

    if ($validator->fails()) {
        return response()->json(["Hiba!" => "Hiányzik egy vagy több kötelező adat"], 422);
    }

    $felhasznalo = Felhasznalo::create([
        'nev' => $request->nev,
        'email' => $request->email,
        'jelszo' => $request->jelszo,
        'edzoE' => $request->edzoE,
        'isAdmin' => false,
        'ertekeles_id' => null,
        'kontener_id' => null,
    ]);

    return response()->json($felhasznalo, 201);
}

    public function update(Request $request, $id){
        $felhasznalo=Felhasznalo::find($id);
        if (is_null($felhasznalo)){
            return response()->json(["Hiba!"=> "Nem található felhasználó id!"],404);
        }
         $validator=Validator::make($request->all(),
                [
                    'nev' => 'required|string|min:3|max:50',
                ]
                );
        if($validator->fails()){
            return response()->json(["Hiba!"=> "Hiányzik egy vagy több kötelező adat"],422);
        }
        $felhasznalo->update($request->all());
        return response()->json($felhasznalo,201);

    }

    public function login(Request $request){
        $felhasznalo=Felhasznalo::where("email", $request->email)->first();

        if($felhasznalo && $felhasznalo->jelszo == $request->jelszo){
            return response()->json($felhasznalo,200);
        }
        return response()->json(["Hiba!"=>"Hibás email vagy jelszó"],401);
    }
public function edzokEdzestervekkel()
{
    return Felhasznalo::where('edzoE', true)
        ->with('edzestervek')
        ->get();
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
