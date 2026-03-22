export interface Felhasznalo {
  id: number;
  nev: string;
  email: string;
  jelszo: string;
  edzoE: boolean;
  isAdmin: boolean;
  ertekeles: number | null;
  kontener: number | null;
}