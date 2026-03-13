import { Edzesterv } from "./edzesterv.model";
import { Ertekeles } from "./ertekeles.model";
import { Gepcsomag } from "./gepcsomag.model";
import { Kontener } from "./kontener.model";

export interface Csomag {
  id: number;
  kontener_id?: number;
  gepcsomag_id?: number;
  ertekeles_id?: number | null;
  edzesterv_id?: number | null;

  kontener?:Kontener;
  gepcsomag?:Gepcsomag;
  ertekeles?:Ertekeles|null;
  edzesterv?:Edzesterv|null;
}
