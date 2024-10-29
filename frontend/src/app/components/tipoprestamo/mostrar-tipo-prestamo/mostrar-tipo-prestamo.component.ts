import { Component, OnInit } from '@angular/core';
import { TipoprestamoI } from '../../../models/Tipoprestamo';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TipoprestamoService } from '../../../services/tipoprestamo.service';

@Component({
  selector: 'app-mostrar-tipoprestamo',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-tipo-prestamo.component.html',
  styleUrls: ['./mostrar-tipo-prestamo.component.css']
})
export class MostrarTipoprestamoComponent implements OnInit {
  public tipoprestamos: TipoprestamoI[] = [];

  constructor(
    private tipoprestamoService: TipoprestamoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarTipoprestamos();
  }

  mostrarTipoprestamos() {
    this.tipoprestamoService.getAllTipoprestamo().subscribe({
      next: (data) => {
        this.tipoprestamos = data.tipoprestamo; // Asegúrate de que la propiedad coincide con la respuesta
        console.log(data);
      },
      error: (err) => {
        console.error('Error al obtener los tipos de préstamo', err);
      }
    });
  }

  eliminar(id: number): void {
    this.tipoprestamoService.deleteTipoprestamo(id).subscribe(
      () => {
        this.mostrarTipoprestamos(); // Actualiza la lista después de eliminar
      },
      err => {
        console.error('Error al eliminar el tipo de préstamo', err);
      }
    );
  }
}
