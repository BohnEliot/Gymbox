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
    edzesterv?: {
      megjegyzes?: string;
      hetfo?: string;
      kedd?: string;
      szerda?: string;
      csutortok?: string;
      pentek?: string;
      szombat?: string;
      vasarnap?: string;
      szerzo?: {
        nev?: string;
      };
    };
  };
}

export interface CreateBerles {
  felhasznalo_id: number;
  csomag: number;
  berlesiIdo: number;
  ar: number;
  edzesterv_id?: number | null;
}