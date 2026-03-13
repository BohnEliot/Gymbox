<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Csomag;
use Illuminate\Support\Facades\Validator;

class CsomagController extends Controller
{
     public function index()
    {
        return Csomag::with([
            'kontener',
            'ertekeles',
            'gepcsomag',
            'edzesterv.szerzo'
        ])->get();
    }

    public function getById($id)
    {
        $csomag = Csomag::with([
            'kontener',
            'ertekeles',
            'gepcsomag',
            'edzesterv.szerzo'
        ])->find($id);

        if (is_null($csomag)) {
            return response()->json(["Hiba!" => "Nem található csomag id!"], 404);
        }

        return response()->json($csomag, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "kontener_id" => "required|exists:kontenerek,id",
            "gepcsomag_id" => "required|exists:gepcsomagok,id",
            "ertekeles_id" => "nullable|exists:ertekelesek,id",
            "edzesterv_id" => "nullable|exists:edzestervek,id",
        ]);

        if ($validator->fails()) {
            return response()->json([
                "Hiba üzenet" => $validator->errors()
            ], 422);
        }

        $csomag = Csomag::create($request->all());

        return response()->json($csomag->load([
            'kontener',
            'ertekeles',
            'gepcsomag',
            'edzesterv.szerzo'
        ]), 201);
    }

    public function destroy($id)
    {
        $csomag = Csomag::find($id);

        if (is_null($csomag)) {
            return response()->json(["Hiba!" => "Nem található csomag id!"], 404);
        }

        $csomag->delete();
        return response()->json(["uzenet" => "Sikeres törlés"], 200);
    }

}
