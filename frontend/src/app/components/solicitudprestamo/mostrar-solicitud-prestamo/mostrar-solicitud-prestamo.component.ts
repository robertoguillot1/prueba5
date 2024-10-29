import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudprestamoI } from '../../../models/Solicitudprestamo';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SolicitudprestamoService } from '../../../services/solicitudprestamo.service';

@Component({
  selector: 'app-mostrar-solicitudprestamo',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-solicitud-prestamo.component.html',
  styleUrls: ['./mostrar-solicitud-prestamo.component.css']
})
export class MostrarSolicitudprestamoComponent implements OnInit {
  public solicitudes: SolicitudprestamoI[] = [];

  constructor(
    private solicitudprestamoService: SolicitudprestamoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarSolicitudes();
  }

  mostrarSolicitudes() {
    this.solicitudprestamoService.getAllSolicitudprestamo().subscribe({
      next: (data) => {
        this.solicitudes = data.solicitudprestamo;
        console.log(data);
      },
      error: (err) => {
        console.error('Error al obtener las solicitudes de préstamo', err);
      }
    });
  }

  eliminar(id: number): void {
    this.solicitudprestamoService.deleteSolicitudprestamo(id).subscribe(
      () => {
        this.mostrarSolicitudes();
      },
      err => {
        console.error('Error al eliminar la solicitud de préstamo', err);
      }
    );
  }
}
