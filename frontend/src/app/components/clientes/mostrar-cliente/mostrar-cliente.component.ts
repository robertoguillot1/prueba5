import { Component, OnInit } from '@angular/core';
import { ClientesI } from '../../../models/Clientes';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ClientesService } from '../../../services/clientes.service';

@Component({
  selector: 'app-mostrar-cliente',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.css']
})
export class MostrarClienteComponent implements OnInit {
  public clientes: ClientesI[] = [];

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarClientes();
  }

  mostrarClientes() {
    this.clientesService.getAllClientes().subscribe({
      next: (data) => {
        this.clientes = data.clientes; // Asegúrate de que la propiedad coincide con la respuesta
        console.log(data);
      },
      error: (err) => {
        console.error('Error al obtener los clientes', err);
      }
    });
  }

  eliminar(id: number): void {
    this.clientesService.deleteCliente(id).subscribe(
      () => {
        this.mostrarClientes(); // Actualiza la lista después de eliminar
      },
      err => {
        console.error('Error al eliminar el cliente', err);
      }
    );
  }
}
