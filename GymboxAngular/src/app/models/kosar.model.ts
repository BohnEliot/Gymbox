import { Csomag } from "./csomag.model";

export interface KosarItem{
    csomag:Csomag;
    honap:3|6|12|24;
    haviAr:number;
    vegosszeg:number;
}