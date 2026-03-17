import { Csomag } from './csomag.model';

export interface Berles {
  id: number;
  felhasznalo_id: number | null;
  csomag: number;
  berlesiIdo: number;
  ar: number;
  csomag_adat?: Csomag;
}

export interface CreateBerles {
  felhasznalo_id: number;
  csomag: number;
  berlesiIdo: number;
  ar: number;
}