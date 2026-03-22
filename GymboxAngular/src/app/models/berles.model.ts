import { Csomag } from './csomag.model';

export interface Berles {
  id: number;
  felhasznalo_id: number;
  csomag: number;
  berlesiIdo: number;
  ar: number;

  status?: string;

  felhasznalo?: {
    nev: string;
  };

  csomag_adat?: {
    kontener?: {
      kontenerNev: string;
    };
  };
}

export interface CreateBerles {
  felhasznalo_id: number;
  csomag: number;
  berlesiIdo: number;
  ar: number;
}