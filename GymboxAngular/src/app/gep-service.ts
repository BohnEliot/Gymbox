import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './api-service';
import { Gep } from './models/gep.model';

@Injectable({
  providedIn: 'root'
})
export class GepService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Gep[]> {
    return this.http.get<Gep[]>(`${API_URL}/gep`);
  }

  getById(id: number): Observable<Gep> {
    return this.http.get<Gep>(`${API_URL}/gep/${id}`);
  }

  getCheaper(ar: number): Observable<Gep[]> {
    return this.http.get<Gep[]>(`${API_URL}/gep/cheaper/${ar}`);
  }

  getMoreExpensive(ar: number): Observable<Gep[]> {
    return this.http.get<Gep[]>(`${API_URL}/gep/expensive/${ar}`);
  }

  filterByCateg(kategoria: string): Observable<Gep[]> {
    return this.http.get<Gep[]>(`${API_URL}/gep/categ/${kategoria}`);
  }
}