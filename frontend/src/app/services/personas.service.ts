import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonasI } from '../models/Personas';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/personas`;

  constructor(private http: HttpClient) { }

  getAllPersonas(): Observable<{ personas: PersonasI[] }> {
    return this.http.get<{ personas: PersonasI[] }>(this.base_path);
  }

  getOnePersona(id: number): Observable<{ persona: PersonasI }> {
    return this.http.get<{ persona: PersonasI }>(`${this.base_path}/${id}`);
  }

  createPersona(data: PersonasI): Observable<PersonasI> {
    return this.http.post<PersonasI>(this.base_path, data);
  }

  updatePersona(id: number, data: PersonasI): Observable<PersonasI> {
    return this.http.put<PersonasI>(`${this.base_path}/${id}`, data);
  }

  deletePersona(id: number): Observable<PersonasI> {
    return this.http.delete<PersonasI>(`${this.base_path}/${id}`);
  }
}
