import { Injectable } from '@angular/core';
import { Edzesterv } from './models/edzesterv.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-service';

@Injectable({
  providedIn: 'root',
})
export class EdzestervService {

  constructor(private http:HttpClient){}

  getAll() {
  return this.http.get<Edzesterv[]>(`${API_URL}/edzesterv`);
}

getByTrainer(id: number) {
  return this.http.get<Edzesterv[]>(`${API_URL}/edzesterv/edzo/${id}`);
}

create(data: Edzesterv) {
  return this.http.post<Edzesterv>(`${API_URL}/edzesterv`, data);
}
}
