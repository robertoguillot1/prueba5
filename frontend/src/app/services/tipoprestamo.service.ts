import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoprestamoI } from '../models/Tipoprestamo';

@Injectable({
  providedIn: 'root'
})
export class TipoprestamoService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/tipoprestamo`;

  constructor(private http: HttpClient) { }

  // Obtener todos los tipos de préstamo
  getAllTipoprestamo(): Observable<{ tipoprestamo: TipoprestamoI[] }> {
    return this.http.get<{ tipoprestamo: TipoprestamoI[] }>(this.base_path);
  }

  // Obtener un tipo de préstamo por ID
  getOneTipoprestamo(id: number): Observable<{ tipoprestamo: TipoprestamoI }> {
    return this.http.get<{ tipoprestamo: TipoprestamoI }>(`${this.base_path}/${id}`);
  }

  // Crear un nuevo tipo de préstamo
  createTipoprestamo(data: TipoprestamoI): Observable<TipoprestamoI> {
    return this.http.post<TipoprestamoI>(this.base_path, data);
  }

  // Actualizar un tipo de préstamo existente
  updateTipoprestamo(id: number, data: TipoprestamoI): Observable<TipoprestamoI> {
    return this.http.put<TipoprestamoI>(`${this.base_path}/${id}`, data);
  }

  // Eliminar un tipo de préstamo
  deleteTipoprestamo(id: number): Observable<TipoprestamoI> {
    return this.http.delete<TipoprestamoI>(`${this.base_path}/${id}`);
  }
}
