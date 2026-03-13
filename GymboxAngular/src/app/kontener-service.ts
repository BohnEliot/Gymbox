import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './api-service';
import { Kontener } from './models/kontener.model';

@Injectable({
  providedIn: 'root'
})
export class KontenerService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Kontener[]> {
    return this.http.get<Kontener[]>(`${API_URL}/kontener`);
  }

  getById(id: number): Observable<Kontener> {
    return this.http.get<Kontener>(`${API_URL}/kontener/${id}`);
  }

  getBiggerArea(negyzetMeter: number): Observable<Kontener[]> {
    return this.http.get<Kontener[]>(`${API_URL}/kontener/biggerarea/${negyzetMeter}`);
  }

  getSmallerArea(negyzetMeter: number): Observable<Kontener[]> {
    return this.http.get<Kontener[]>(`${API_URL}/kontener/smallerarea/${negyzetMeter}`);
  }
}