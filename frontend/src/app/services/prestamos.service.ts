import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrestamosI } from '../models/Prestamos';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/prestamos`;

  constructor(private http: HttpClient) { }

  getAllPrestamos(): Observable<{ prestamos: PrestamosI[] }> {
    return this.http.get<{ prestamos: PrestamosI[] }>(this.base_path);
  }

  getOnePrestamo(id: number): Observable<{ prestamo: PrestamosI }> {
    return this.http.get<{ prestamo: PrestamosI }>(`${this.base_path}/${id}`);
  }

  createPrestamo(data: PrestamosI): Observable<PrestamosI> {
    return this.http.post<PrestamosI>(this.base_path, data);
  }

  updatePrestamo(id: number, data: PrestamosI): Observable<PrestamosI> {
    return this.http.put<PrestamosI>(`${this.base_path}/${id}`, data);
  }

  deletePrestamo(id: number): Observable<PrestamosI> {
    return this.http.delete<PrestamosI>(`${this.base_path}/${id}`);
  }
}
