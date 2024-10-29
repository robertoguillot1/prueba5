import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitudprestamoI } from '../models/Solicitudprestamo';

@Injectable({
  providedIn: 'root'
})
export class SolicitudprestamoService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/solicitudprestamo`;

  constructor(private http: HttpClient) { }

  getAllSolicitudprestamo(): Observable<{ solicitudprestamo: SolicitudprestamoI[] }> {
    return this.http.get<{ solicitudprestamo: SolicitudprestamoI[] }>(this.base_path);
  }

  getOneSolicitudprestamo(id: number): Observable<{ solicitudprestamo: SolicitudprestamoI }> {
    return this.http.get<{ solicitudprestamo: SolicitudprestamoI }>(`${this.base_path}/${id}`);
  }

  createSolicitudprestamo(data: SolicitudprestamoI): Observable<SolicitudprestamoI> {
    return this.http.post<SolicitudprestamoI>(this.base_path, data);
  }

  updateSolicitudprestamo(id: number, data: SolicitudprestamoI): Observable<SolicitudprestamoI> {
    return this.http.put<SolicitudprestamoI>(`${this.base_path}/${id}`, data);
  }

  deleteSolicitudprestamo(id: number): Observable<SolicitudprestamoI> {
    return this.http.delete<SolicitudprestamoI>(`${this.base_path}/${id}`);
  }
}
