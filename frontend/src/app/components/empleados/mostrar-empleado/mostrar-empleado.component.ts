import { Component, OnInit } from '@angular/core';
import { EmpleadosI } from '../../../models/Empleados';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { EmpleadosService } from '../../../services/empleados.service';

@Component({
  selector: 'app-mostrar-empleado',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-empleado.component.html',
  styleUrls: ['./mostrar-empleado.component.css']
})
export class MostrarEmpleadoComponent implements OnInit {
  public empleados: EmpleadosI[] = [];

  constructor(
    private empleadosService: EmpleadosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarEmpleados();
  }

  mostrarEmpleados() {
    this.empleadosService.getAllEmpleados().subscribe({
      next: (data) => {
        this.empleados = data.empleados;
        console.log(data);
      },
      error: (err) => {
        console.error('Error al obtener los empleados', err);
      }
    });
  }

  eliminar(id: number): void {
    this.empleadosService.deleteEmpleado(id).subscribe(
      () => {
        this.mostrarEmpleados();
      },
      err => {
        console.error('Error al eliminar el empleado', err);
      }
    );
  }
}
