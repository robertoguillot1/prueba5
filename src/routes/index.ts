import { Application } from 'express';
import { ClientesRoutes } from '../routes/Clientes';
import { SucursalesRoutes } from '../routes/Sucursales';
import { PrestamosRoutes } from '../routes/Prestamos';
import { TipoprestamoRoutes } from '../routes/Tipoprestamo';
import { PersonasRoutes } from '../routes/Personas';
import { EmpleadosRoutes } from '../routes/Empleados';
import { SolicitudprestamoRoutes } from '../routes/Solicitudprestamo';
import { GarantiasRoutes } from '../routes/Garantias';
import { PagosRoutes } from '../routes/Pagos';

export class Routes {
    public ClientesRoutes: ClientesRoutes = new ClientesRoutes();
    public SucursalesRoutes: SucursalesRoutes = new SucursalesRoutes();
    public PrestamosRoutes: PrestamosRoutes = new PrestamosRoutes();
    public TipoprestamoRoutes: TipoprestamoRoutes = new TipoprestamoRoutes();
    public PersonasRoutes: PersonasRoutes = new PersonasRoutes();
    public EmpleadosRoutes: EmpleadosRoutes = new EmpleadosRoutes();
    public SolicitudprestamoRoutes: SolicitudprestamoRoutes = new SolicitudprestamoRoutes();
    public GarantiasRoutes: GarantiasRoutes = new GarantiasRoutes();
    public PagosRoutes: PagosRoutes = new PagosRoutes();

}
