import { Routes } from '@angular/router';

//importaciones para el modelo Clientes
import { MostrarClienteComponent } from './components/clientes/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/clientes/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/clientes/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './components/clientes/eliminar-cliente/eliminar-cliente.component';

// Importaciones para el modelo Empleados
import { MostrarEmpleadoComponent } from './components/empleados/mostrar-empleado/mostrar-empleado.component';
import { CrearEmpleadoComponent } from './components/empleados/crear-empleado/crear-empleado.component';
import { ActualizarEmpleadoComponent } from './components/empleados/actualizar-empleado/actualizar-empleado.component';
import { EliminarEmpleadoComponent } from './components/empleados/eliminar-empleado/eliminar-empleado.component';

// Importaciones para el modelo Garantias
import { MostrarGarantiaComponent } from './components/garantias/mostrar-garantia/mostrar-garantia.component';
import { CrearGarantiaComponent } from './components/garantias/crear-garantia/crear-garantia.component';
import { ActualizarGarantiaComponent } from './components/garantias/actualizar-garantia/actualizar-garantia.component';
import { EliminarGarantiaComponent } from './components/garantias/eliminar-garantia/eliminar-garantia.component';

// Importaciones para el modelo Pagos
import { MostrarPagoComponent } from './components/pagos/mostrar-pago/mostrar-pago.component';
import { CrearPagoComponent } from './components/pagos/crear-pago/crear-pago.component';
import { ActualizarPagoComponent } from './components/pagos/actualizar-pago/actualizar-pago.component';
import { EliminarPagoComponent } from './components/pagos/eliminar-pago/eliminar-pago.component';

// Importaciones para el modelo Personas
import { MostrarPersonaComponent } from './components/personas/mostrar-persona/mostrar-persona.component';
import { CrearPersonaComponent } from './components/personas/crear-persona/crear-persona.component';
import { ActualizarPersonaComponent } from './components/personas/actualizar-persona/actualizar-persona.component';
import { EliminarPersonaComponent } from './components/personas/eliminar-persona/eliminar-persona.component';

// Importaciones para el modelo Prestamos
import { MostrarPrestamoComponent } from './components/prestamos/mostrar-prestamo/mostrar-prestamo.component';
import { CrearPrestamoComponent } from './components/prestamos/crear-prestamo/crear-prestamo.component';
import { ActualizarPrestamoComponent } from './components/prestamos/actualizar-prestamo/actualizar-prestamo.component';
import { EliminarPrestamoComponent } from './components/prestamos/eliminar-prestamo/eliminar-prestamo.component';

// Importaciones para el modelo Solicitudprestamo
import { MostrarSolicitudprestamoComponent } from './components/solicitudprestamo/mostrar-solicitud-prestamo/mostrar-solicitud-prestamo.component';
import { CrearSolicitudPrestamoComponent } from './components/solicitudprestamo/crear-solicitud-prestamo/crear-solicitud-prestamo.component';
import { ActualizarSolicitudPrestamoComponent } from './components/solicitudprestamo/actualizar-solicitud-prestamo/actualizar-solicitud-prestamo.component';
import { EliminarSolicitudPrestamoComponent } from './components/solicitudprestamo/eliminar-solicitud-prestamo/eliminar-solicitud-prestamo.component';

// Importaciones para el modelo Sucursales
import { MostrarSucursalComponent } from './components/sucursales/mostrar-sucursal/mostrar-sucursal.component';
import { CrearSucursalComponent } from './components/sucursales/crear-sucursal/crear-sucursal.component';
import { ActualizarSucursalComponent } from './components/sucursales/actualizar-sucursal/actualizar-sucursal.component';
import { EliminarSucursalComponent } from './components/sucursales/eliminar-sucursal/eliminar-sucursal.component';

// Importaciones para el modelo Tipoprestamo
import { MostrarTipoprestamoComponent } from './components/tipoprestamo/mostrar-tipo-prestamo/mostrar-tipo-prestamo.component';
import { CrearTipoPrestamoComponent } from './components/tipoprestamo/crear-tipo-prestamo/crear-tipo-prestamo.component';
import { ActualizarTipoPrestamoComponent } from './components/tipoprestamo/actualizar-tipo-prestamo/actualizar-tipo-prestamo.component';
import { EliminarTipoPrestamoComponent } from './components/tipoprestamo/eliminar-tipo-prestamo/eliminar-tipo-prestamo.component';

export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },

    // Rutas para Clientes
    { path: "clientes", component: MostrarClienteComponent },
    { path: "clientes/nuevo", component: CrearClienteComponent },
    { path: "clientes/edit/:id", component: ActualizarClienteComponent },
    { path: "clientes/eliminar/:id", component: EliminarClienteComponent },

    // Rutas para Empleados
    { path: "empleados", component: MostrarEmpleadoComponent },
    { path: "empleados/nuevo", component: CrearEmpleadoComponent },
    { path: "empleados/edit/:id", component: ActualizarEmpleadoComponent },
    { path: "empleados/eliminar/:id", component: EliminarEmpleadoComponent },

    // Rutas para Garantias
    { path: "garantias", component: MostrarGarantiaComponent },
    { path: "garantias/nuevo", component: CrearGarantiaComponent },
    { path: "garantias/edit/:id", component: ActualizarGarantiaComponent },
    { path: "garantias/eliminar/:id", component: EliminarGarantiaComponent },

    // Rutas para Pagos
    { path: "pagos", component: MostrarPagoComponent },
    { path: "pagos/nuevo", component: CrearPagoComponent },
    { path: "pagos/edit/:id", component: ActualizarPagoComponent },
    { path: "pagos/eliminar/:id", component: EliminarPagoComponent },

    // Rutas para Personas
    { path: "personas", component: MostrarPersonaComponent },
    { path: "personas/nuevo", component: CrearPersonaComponent },
    { path: "personas/edit/:id", component: ActualizarPersonaComponent },
    { path: "personas/eliminar/:id", component: EliminarPersonaComponent },

    // Rutas para Prestamos
    { path: "prestamos", component: MostrarPrestamoComponent },
    { path: "prestamos/nuevo", component: CrearPrestamoComponent },
    { path: "prestamos/edit/:id", component: ActualizarPrestamoComponent },
    { path: "prestamos/eliminar/:id", component: EliminarPrestamoComponent },

    // Rutas para Solicitudprestamo
    { path: "solicitudprestamo", component: MostrarSolicitudprestamoComponent },
    { path: "solicitudprestamo/nuevo", component: CrearSolicitudPrestamoComponent },
    { path: "solicitudprestamo/edit/:id", component: ActualizarSolicitudPrestamoComponent },
    { path: "solicitudprestamo/eliminar/:id", component: EliminarSolicitudPrestamoComponent },

    // Rutas para Sucursales
    { path: "sucursales", component: MostrarSucursalComponent },
    { path: "sucursales/nuevo", component: CrearSucursalComponent },
    { path: "sucursales/edit/:id", component: ActualizarSucursalComponent },
    { path: "sucursales/eliminar/:id", component: EliminarSucursalComponent },

    // Rutas para Tipoprestamo
    { path: "tipoprestamo", component: MostrarTipoprestamoComponent },
    { path: "tipoprestamo/nuevo", component: CrearTipoPrestamoComponent },
    { path: "tipoprestamo/edit/:id", component: ActualizarTipoPrestamoComponent },
    { path: "tipoprestamo/eliminar/:id", component: EliminarTipoPrestamoComponent }
];