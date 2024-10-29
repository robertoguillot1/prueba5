import { Component, OnInit } from '@angular/core';
import { SucursalesI } from '../../../models/Sucursales';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SucursalesService } from '../../../services/sucursales.service';

@Component({
  selector: 'app-mostrar-sucursal',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-sucursal.component.html',
  styleUrls: ['./mostrar-sucursal.component.css']
})
export class MostrarSucursalComponent implements OnInit {
  public sucursales: SucursalesI[] = [];

  constructor(
    private sucursalesService: SucursalesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarSucursales();
  }

  mostrarSucursales() {
    this.sucursalesService.getAllSucursales().subscribe({
      next: (data) => {
        this.sucursales = data.sucursales; // Asegúrate de que la propiedad coincide con la respuesta
        console.log(data);
      },
      error: (err) => {
        console.error('Error al obtener las sucursales', err);
      }
    });
  }

  eliminar(id: number): void {
    this.sucursalesService.deleteSucursal(id).subscribe(
      () => {
        this.mostrarSucursales(); // Actualiza la lista después de eliminar
      },
      err => {
        console.error('Error al eliminar la sucursal', err);
      }
    );
  }
}
