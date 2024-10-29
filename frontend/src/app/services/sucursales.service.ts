import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SucursalesI } from '../models/Sucursales';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/sucursales`;

  constructor(private http: HttpClient) { }

  getAllSucursales(): Observable<{ sucursales: SucursalesI[] }> {
    return this.http.get<{ sucursales: SucursalesI[] }>(this.base_path);
  }

  getOneSucursal(id: number): Observable<{ sucursal: SucursalesI }> {
    return this.http.get<{ sucursal: SucursalesI }>(`${this.base_path}/${id}`);
  }

  createSucursal(data: SucursalesI): Observable<SucursalesI> {
    return this.http.post<SucursalesI>(this.base_path, data);
  }

  updateSucursal(id: number, data: SucursalesI): Observable<SucursalesI> {
    return this.http.put<SucursalesI>(`${this.base_path}/${id}`, data);
  }

  deleteSucursal(id: number): Observable<SucursalesI> {
    return this.http.delete<SucursalesI>(`${this.base_path}/${id}`);
  }
}
