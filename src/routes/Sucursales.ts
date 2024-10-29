import { Request, Response, Application } from 'express';
import { SucursalesController } from '../controllers/Sucursales.controller';

export class SucursalesRoutes {
    public sucursalesController: SucursalesController = new SucursalesController();

    public routes(app: Application): void {
        app.route('/sucursales').get(this.sucursalesController.getAllSucursales);
        app.route('/sucursales/:id').get(this.sucursalesController.getOneSucursales);
        app.route('/sucursales').post(this.sucursalesController.createSucursales);
        app.route('/sucursales/:id').put(this.sucursalesController.updateSucursales);
        app.route('/sucursales/:id').delete(this.sucursalesController.deleteSucursales);
    }
}
