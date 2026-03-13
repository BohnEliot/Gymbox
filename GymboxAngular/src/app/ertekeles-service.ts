import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './api-service';
import { Ertekeles } from './models/ertekeles.model';

@Injectable({
  providedIn: 'root'
})
export class ErtekelesService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Ertekeles[]> {
    return this.http.get<Ertekeles[]>(`${API_URL}/ertekeles`);
  }

  getById(id: number): Observable<Ertekeles> {
    return this.http.get<Ertekeles>(`${API_URL}/ertekeles/${id}`);
  }
}