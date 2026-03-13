import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './api-service';
import { Csomag } from './models/csomag.model';

@Injectable({
  providedIn: 'root'
})
export class CsomagService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Csomag[]> {
    return this.http.get<Csomag[]>(`${API_URL}/csomag`);
  }

  getById(id: number): Observable<Csomag> {
    return this.http.get<Csomag>(`${API_URL}/csomag/${id}`);
  }

  create(data: Csomag) {
    return this.http.post(`${API_URL}/csomag`, data);
  }

  delete(id: number) {
    return this.http.delete(`${API_URL}/csomag/${id}`);
  }
}