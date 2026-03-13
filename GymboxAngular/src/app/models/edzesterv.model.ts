import { Szerzo } from "./szerzo.model";

export interface Edzesterv{
  id: number;
  megjegyzes?: string | null;
  hetfo?: string | null;
  kedd?: string | null;
  szerda?: string | null;
  csutortok?: string | null;
  pentek?: string | null;
  szombat?: string | null;
  vasarnap?: string | null;
  szerzo?: Szerzo | null;
}