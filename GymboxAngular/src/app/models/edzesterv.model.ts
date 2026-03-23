import { Szerzo } from "./szerzo.model";

export interface Edzesterv {
  id?: number;
  felhasznalo_id: number;
  hetfo?: string;
  kedd?: string;
  szerda?: string;
  csutortok?: string;
  pentek?: string;
  szombat?: string;
  vasarnap?: string;
  megjegyzes?: string;
  szerzo?: {
    id: number;
    nev: string;
  };
}