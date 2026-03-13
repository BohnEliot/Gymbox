import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './api-service';
import { Gepcsomag } from './models/gepcsomag.model';

@Injectable({
  providedIn: 'root'
})
export class GepcsomagService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Gepcsomag[]> {
    return this.http.get<Gepcsomag[]>(`${API_URL}/gepcsomag`);
  }

  getById(id: number): Observable<Gepcsomag> {
    return this.http.get<Gepcsomag>(`${API_URL}/gepcsomag/${id}`);
  }
}