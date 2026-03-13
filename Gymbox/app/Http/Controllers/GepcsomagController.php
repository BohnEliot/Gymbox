<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gepcsomag;

class GepcsomagController extends Controller
{
    public function index(){
         return Gepcsomag::with('gepId1','gepId2','gepId3','gepId4','gepId5')->get();
    }

    public function getById($id)
    {
        $gepcsomag=Gepcsomag::find($id);

        if (is_null($gepcsomag)) {
            return response()->json(["Hiba!"=>"Nem található gépcsomag id!"],404);
        }

        return response($gepcsomag,200);
    }

    

}
