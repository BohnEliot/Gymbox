import { Injectable, signal } from '@angular/core';
import { Felhasznalo } from './models/felhasznalo.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  loggedinFelhasznalo=signal<Felhasznalo | null>(null);
  isLoggenIn=signal<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    try {
      const storedfelhasznalo = localStorage.getItem('felhasznalo');
      if (storedfelhasznalo) {
        this.loggedinFelhasznalo.set(JSON.parse(storedfelhasznalo));
      }
    } catch (error) {
      console.error("Hibás felhasznalo adatok a localStorage-ben:", error);
      localStorage.removeItem('felhasznalo'); 
    }

    const stored: string | null = localStorage.getItem('felhasznalo');

  if (stored) {
  const f = JSON.parse(stored) as Felhasznalo;
  this.loggedinFelhasznalo.set(f);
  this.isLoggenIn.set(true);
}
  }

 register(nev: string, jelszo: string, email: string, edzoE: boolean): Observable<Felhasznalo> {
  return this.http.post<Felhasznalo>(`${this.apiUrl}/felhasznalo`, { nev, jelszo, email, edzoE }).pipe(
    tap((f) => this.setLoggedInFelhasznalo(f))
  );
}
 
 
 private setLoggedInFelhasznalo(f: Felhasznalo) {
  this.loggedinFelhasznalo.set(f);
  this.isLoggenIn.set(true);
  localStorage.setItem('felhasznalo', JSON.stringify(f));
}

 getFelhasznalo(email: string, jelszo: string): Observable<Felhasznalo> {
  return this.http.post<Felhasznalo>(`${this.apiUrl}/login`, { email, jelszo }).pipe(tap((f) => this.setLoggedInFelhasznalo(f)));
}

updateNev(id: number, nev: string): Observable<Felhasznalo> {
    return this.http.put<Felhasznalo>(`${this.apiUrl}/felhasznalo/${id}`, { nev }).pipe(tap((f) => this.setLoggedInFelhasznalo(f)));
  }


 logout(): void {
  this.loggedinFelhasznalo.set(null);
  this.isLoggenIn.set(false);
  localStorage.removeItem('felhasznalo');
  this.router.navigate(['/login']);
}

  getfelhasznalo() {
    return this.loggedinFelhasznalo;
  }

isAdmin(): boolean {
  return this.loggedinFelhasznalo()?.isAdmin === true;
}

}
