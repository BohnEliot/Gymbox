<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Ertekeles;
use App\Models\Kontener;
use App\Models\Felhasznalo;
use App\Models\Gep;
use App\Models\Gepcsomag;
use App\Models\Csomag;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $ertekelesek=[
            'Szuper felszerelés,kényelmes edzés bárhol!',
            'Tiszta, modern konténer, igazi mini edzőterem',
            'Jó ötlet, de lehetne kicsit olcsóbb.',
            'Profi kialakítás, minden eszköz kéznél.',
            'Túl meleg volt bent, nem élveztem az edzést.',
            'Gyors bérlés, minden a helyén, ajánlom!',
            'Nagyon kényelmes, hogy otthon tudok edzeni.',
            'Zajos volt, de a gépek hibátlanok.',
            'Korrekt szolgáltatás, kicsit nehézkes egyeztetés.',
            'Meglepően jó élmény, újra bérelni fogok!',
        ];

        foreach($ertekelesek as $key=>$value){
            Ertekeles::create(['ertekeles'=>$value]);
        }

        $kontenerek=[
        ["20' normál",2300,2.35,2.43,2.39,5.89,2.59,6.09,13.86],
        ["40' normál",3750,2.35,2.43,2.68,12.03,2.59,12.19,28.27],
        ["40' magas",3940,2.35,2.43,2.69,12.03,2.89,12.19,28.27],
        ["45' magas",4820,2.35,2.43,2.69,13.55,2.89,13.71,31.188]

        ];

        foreach($kontenerek as $key=>$value){
            Kontener::create(['kontenerNev'=>$value[0], 'sulyKG'=>$value[1], 'belSzelesseg'=>$value[2], 'kulSzelesseg'=>$value[3], 
        'belMagassag'=>$value[4], 'belHosszusag'=>$value[5], 'kulMagassag'=>$value[6], 'kulHosszusag'=>$value[7], 'negyzetMeter'=>$value[8]  ]);
        }


        $felhasznalok=[["Bohn Eliot Konstantin","bohneliot@gmail.com","ezajelszo",true,1,3]];
        
        foreach($felhasznalok as $key=>$value){
            Felhasznalo::create(['nev'=>$value[0], 'email'=>$value[1], 'jelszo'=>$value[2],'edzoE'=>$value[3], 'ertekeles'=>$value[4], 'kontener'=>$value[5]]);
        }


        $gepek=
        [
            ["Hektor3 Otthoni Lapsúlyos Kondigép",219000,"HMS","Kondicionális erősítő",82,112,120,207],
            ["Gladiator Otthoni Multigym",269000,"Elite Fitness ","Kondicionális erősítő",95,106,112,207],
            ["Atlas X3 Smith keret",249000,"HMS","Kondicionális erősítő",82,207,112,120],
            ["TFK 650 futópad",369000,"Everfit","Kardiovaszkuláris",62,189,76,137],
            ["BRX-R65 COMFORT háttámlás szobakerékpár",169000,"Toorx","Kardiovaszkuláris",33,130,63,97],
            ["ERX-400 elliptikus tréner",369000,"Toorx","Kardiovaszkuláris",64,150,59,179],
            ["Rower Sea 70 evezőgép",239000,"Toorx","Kardiovaszkuláris",26,186,44,104],
            ["ERX-400 elliptikus tréner",369000,"Toorx","Kardiovaszkuláris",64,150,59,179],
            ["RWX Air 5000 evezőgép",549000,"Toorx","Kardiovaszkuláris",52,237,63,113],
            ["MSX-60 kombinált gép",409900,"Toorx","Kondicionális erősítő",142,113,93,206],
            ["Platinum V-series melltől / vállból nyomó gép",999900,"Tunturi","Kondicionális erősítő",244,190,127,155],
            ["Platinum V-series combfeszítő gép",889900,"Tunturi","Kondicionális erősítő",174,130,98,155],
            ["Platinum V-series tárogató / hátsóváll gép",939900,"Tunturi","Kondicionális erősítő",242,130,117,208],
            ["MSX-5000 lábtoló",449900,"Toorx","Kondicionális erősítő",101,131,196,107],
            ["Platinum V-series combfeszítő / combhajlító gép",949900,"Tunturi","Kondicionális erősítő",230,152,82,215],
            ["Platinum V-series vállból nyomó gép",949900,"Tunturi","Kondicionális erősítő",219,135,135,155],
            ["MSX-50 kombinált gép",349900,"Toorx","Kondicionális erősítő",134,175,105,202],
            ["Platinum V-series csípőemelő farizom gép",959900,"Tunturi","Kondicionális erősítő",226,195,123,155],
            ["Platinum V-series combközelítő / combtávolító gép",899900,"Tunturi","Kondicionális erősítő",234,152,61,155],
            ["Platinum V-series hasprés / mélyhát gép",919900,"Tunturi","Kondicionális erősítő",223,164,100,155],
            ["HG60 többfunkciós lapsúlyos otthoni kondigép",499900,"Tunturi","Kondicionális erősítő",160,168,114,212],
            ["SM80 többfunciós Smith erőkeret",399900,"Tunturi","Kondicionális erősítő",124,190,184,209],
            ["Tytan 17 Otthoni Lapsúlyos Kondigép",539000,"HMS","Kondicionális erősítő",214,200,215,210],
            ["kombinált edzőkeret",699000,"Cyklop","Kondicionális erősítő",139,199,150,220],
            ["G2B kombinált edzőgép",619000,"Body-Solid","Kondicionális erősítő",204,191,206,212],
            ["Tytan12 Multifunkciós kondigép",229900,"HMS","Kondicionális erősítő",142,160,225,212],
            ["Tytan10R Otthoni Multifunkciós kondigép",274900,"HMS","Kondicionális erősítő",179,274,162,203],
            ["Crossover 500 Otthoni Keresztcsiga",299000,"Elite Fitness ","Kondicionális erősítő",204,255,62,212],
            ["WT80 otthoni többfunkciós kondigép",299000,"Tunturi","Kondicionális erősítő",54,165,115,182],
            ["kombinált edzőgép",349000,"Master Poseidon","Kondicionális erősítő",154,168,172,203]
        ];

         foreach($gepek as $key=>$value){
            Gep::create(['nev'=>$value[0], 'ar'=>$value[1], 'marka'=>$value[2],'kategoria'=>$value[3], 'gepSuly'=>$value[4], 'gepHossz'=>$value[5], 'gepSzelesseg'=>$value[6], 'gepMagassag'=>$value[7]]);
        }


        $gepcsomagok=[
            [1,2,3,4,5],
            [4,5,6,7,8],
            [10,11,12,14,9],
            [20,19,18,15,6],
            [16,13,11,17,3],
            [30,28,29,27,26],
            [21,22,23,24,25]
        ];

        foreach($gepcsomagok as $key=>$value){
            Gepcsomag::create(['gepId1'=>$value[0], 'gepId2'=>$value[1], 'gepId3'=>$value[2],'gepId4'=>$value[3], 'gepId5'=>$value[4]]);
        }


        $csomagok=
        [
            [2,1,3],
            [1,2,4],
            [3,3,6],
            [3,4,4],
            [4,5,6]
        ];

         foreach($csomagok as $key=>$value){
            Csomag::create(['kontener'=>$value[0], 'gepcsomag'=>$value[1], 'ertekeles'=>$value[2]]);
        }


        


  
    }
}
