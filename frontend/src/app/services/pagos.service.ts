import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagosI } from '../models/Pagos';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/pagos`;

  constructor(private http: HttpClient) { }

  getAllPagos(): Observable<{ pagos: PagosI[] }> {
    return this.http.get<{ pagos: PagosI[] }>(this.base_path);
  }

  getOnePago(id: number): Observable<{ pago: PagosI }> {
    return this.http.get<{ pago: PagosI }>(`${this.base_path}/${id}`);
  }

  createPago(data: PagosI): Observable<PagosI> {
    return this.http.post<PagosI>(this.base_path, data);
  }

  updatePago(id: number, data: PagosI): Observable<PagosI> {
    return this.http.put<PagosI>(`${this.base_path}/${id}`, data);
  }

  deletePago(id: number): Observable<PagosI> {
    return this.http.delete<PagosI>(`${this.base_path}/${id}`);
  }
}
