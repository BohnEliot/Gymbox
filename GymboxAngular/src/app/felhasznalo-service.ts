import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './api-service';
import { Felhasznalo } from './models/felhasznalo.model';

@Injectable({
  providedIn: 'root'
})
export class FelhasznaloService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Felhasznalo[]> {
    return this.http.get<Felhasznalo[]>(`${API_URL}/felhasznalo`);
  }

  getById(id: number): Observable<Felhasznalo> {
    return this.http.get<Felhasznalo>(`${API_URL}/felhasznalo/${id}`);
  }

  create(data: Felhasznalo) {
    return this.http.post(`${API_URL}/felhasznalo`, data);
  }

  update(id: number, data: Felhasznalo) {
    return this.http.put(`${API_URL}/felhasznalo/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${API_URL}/felhasznalo/${id}`);
  }
}