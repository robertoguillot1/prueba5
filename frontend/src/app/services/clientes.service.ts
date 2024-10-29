import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientesI} from '../models/Clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/clientes`;

  constructor(private http: HttpClient) { }

  // Obtener todos los clientes
  getAllClientes(): Observable<{ clientes: ClientesI[] }> {
    return this.http.get<{ clientes: ClientesI[] }>(this.base_path);
  }

  // Obtener un cliente por ID
  getOneCliente(id: number): Observable<{ cliente: ClientesI }> {
    return this.http.get<{ cliente: ClientesI }>(`${this.base_path}/${id}`);
  }

  // Crear un nuevo cliente
  createCliente(data: ClientesI): Observable<ClientesI> {
    return this.http.post<ClientesI>(this.base_path, data);
  }

  // Actualizar un cliente existente
  updateCliente(id: number, data: ClientesI): Observable<ClientesI> {
    return this.http.put<ClientesI>(`${this.base_path}/${id}`, data);
  }

  // Eliminar un cliente
  deleteCliente(id: number): Observable<ClientesI> {
    return this.http.delete<ClientesI>(`${this.base_path}/${id}`);
  }
}
