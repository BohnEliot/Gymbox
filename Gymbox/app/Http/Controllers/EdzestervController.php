<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Edzesterv;
use Illuminate\Support\Facades\Validator;

class EdzestervController extends Controller
{
     public function index()
    {
        return Edzesterv::with('szerzo')->get();
    }

    public function getById($id)
    {
        $edzesterv = Edzesterv::with('szerzo')->find($id);

        if (is_null($edzesterv)) {
            return response()->json(["Hiba!" => "Nem található edzésterv id!"], 404);
        }

        return response()->json($edzesterv, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'felhasznalo_id' => 'required|exists:felhasznalok,id',
            'megjegyzes'=>'required|string',
            'hetfo' => 'required|string',
            'kedd' => 'required|string',
            'szerda' => 'required|string',
            'csutortok' => 'required|string',
            'pentek' => 'required|string',
            'szombat' => 'required|string',
            'vasarnap' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $edzesterv = Edzesterv::create($request->all());

        return response()->json($edzesterv->load('szerzo'), 201);
    }
    
}
