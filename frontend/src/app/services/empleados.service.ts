import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadosI } from '../models/Empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/empleados`;

  constructor(private http: HttpClient) { }

  // Obtener todos los empleados
  getAllEmpleados(): Observable<{ empleados: EmpleadosI[] }> {
    return this.http.get<{ empleados: EmpleadosI[] }>(this.base_path);
  }

  // Obtener un empleado por ID
  getOneEmpleado(id: number): Observable<{ empleado: EmpleadosI }> {
    return this.http.get<{ empleado: EmpleadosI }>(`${this.base_path}/${id}`);
  }

  // Crear un nuevo empleado
  createEmpleado(data: EmpleadosI): Observable<EmpleadosI> {
    return this.http.post<EmpleadosI>(this.base_path, data);
  }

  // Actualizar un empleado existente
  updateEmpleado(id: number, data: EmpleadosI): Observable<EmpleadosI> {
    return this.http.put<EmpleadosI>(`${this.base_path}/${id}`, data);
  }

  // Eliminar un empleado
  deleteEmpleado(id: number): Observable<EmpleadosI> {
    return this.http.delete<EmpleadosI>(`${this.base_path}/${id}`);
  }
}
