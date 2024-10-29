import { Request, Response, Application } from 'express';
import { EmpleadosController } from '../controllers/Empleados.controller';

export class EmpleadosRoutes {
    public empleadosController: EmpleadosController = new EmpleadosController();

    public routes(app: Application): void {
        app.route('/empleados').get(this.empleadosController.getAllEmpleados);
        app.route('/empleados/:id').get(this.empleadosController.getOneEmpleados);
        app.route('/empleados').post(this.empleadosController.createEmpleados);
        app.route('/empleados/:id').put(this.empleadosController.updateEmpleados);
        app.route('/empleados/:id').delete(this.empleadosController.deleteEmpleados);
    }
}
