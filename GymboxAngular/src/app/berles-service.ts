import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './api-service';
import { Berles, CreateBerles } from './models/berles.model';

@Injectable({
  providedIn: 'root'
})
export class BerlesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Berles[]> {
    return this.http.get<Berles[]>(`${API_URL}/berles`);
  }

  getById(id: number): Observable<Berles> {
    return this.http.get<Berles>(`${API_URL}/berles/${id}`);
  }

  create(data: CreateBerles): Observable<Berles> {
    return this.http.post<Berles>(`${API_URL}/berles`, data);
  }

  delete(id: number) {
    return this.http.delete(`${API_URL}/berles/${id}`);
  }

 getUserBerlesek(felhasznaloId: number): Observable<Berles[]> {
  return this.http.get<Berles[]>(`${API_URL}/felhasznalo/${felhasznaloId}/berlesek`);
}

updateStatus(id: number) {
  return this.http.patch(`${API_URL}/berles/${id}/status`, {});
}
}