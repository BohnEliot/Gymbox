import { Csomag } from "./csomag.model";
import { Edzesterv } from "./edzesterv.model";

export interface KosarItem {
  csomag: Csomag;
  honap: number;
  haviAr: number;
  vegosszeg: number;
  edzesterv_id?: number | null;
  edzesterv?: Edzesterv | null;
}