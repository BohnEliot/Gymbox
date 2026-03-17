<?php

namespace App\Http\Controllers;

use App\Models\Berles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BerlesController extends Controller
{
    public function index()
    {
        return Berles::with(['felhasznalo', 'csomagAdat'])->get();
    }

    public function getById($id)
    {
        $berles = Berles::with(['felhasznalo', 'csomagAdat'])->find($id);

        if (is_null($berles)) {
            return response()->json(['hiba' => 'Nem található bérlés'], 404);
        }

        return response()->json($berles, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'felhasznalo_id' => 'required|exists:felhasznalok,id',
            'csomag' => 'required|exists:csomagok,id',
            'berlesiIdo' => 'required|integer|in:3,6,12,24',
            'ar' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'hibak' => $validator->errors()
            ], 422);
        }

        $berles = Berles::create([
            'felhasznalo_id' => $request->felhasznalo_id,
            'csomag' => $request->csomag,
            'berlesiIdo' => $request->berlesiIdo,
            'ar' => $request->ar,
        ]);

        return response()->json($berles->load(['felhasznalo', 'csomagAdat']), 201);
    }

    public function destroy($id)
    {
        $berles = Berles::find($id);

        if (is_null($berles)) {
            return response()->json(['hiba' => 'Nem található bérlés'], 404);
        }

        $berles->delete();

        return response()->json(['uzenet' => 'Sikeres törlés'], 200);
    }

   public function userBerlesek($felhasznaloId)
{
    return Berles::with([
        'felhasznalo',
        'csomagAdat.kontener',
        'csomagAdat.gepcsomag',
        'csomagAdat.edzesterv.szerzo',
        'csomagAdat.ertekeles'
    ])
    ->where('felhasznalo_id', $felhasznaloId)
    ->get();
}
}