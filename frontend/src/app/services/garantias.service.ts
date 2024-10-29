import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GarantiasI } from '../models/Garantias';

@Injectable({
  providedIn: 'root'
})
export class GarantiasService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/garantias`;

  constructor(private http: HttpClient) { }

  getAllGarantias(): Observable<{ garantias: GarantiasI[] }> {
    return this.http.get<{ garantias: GarantiasI[] }>(this.base_path);
  }

  getOneGarantia(id: number): Observable<{ garantia: GarantiasI }> {
    return this.http.get<{ garantia: GarantiasI }>(`${this.base_path}/${id}`);
  }

  createGarantia(data: GarantiasI): Observable<GarantiasI> {
    return this.http.post<GarantiasI>(this.base_path, data);
  }

  updateGarantia(id: number, data: GarantiasI): Observable<GarantiasI> {
    return this.http.put<GarantiasI>(`${this.base_path}/${id}`, data);
  }

  deleteGarantia(id: number): Observable<GarantiasI> {
    return this.http.delete<GarantiasI>(`${this.base_path}/${id}`);
  }
}
