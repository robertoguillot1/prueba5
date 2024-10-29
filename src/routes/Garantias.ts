import { Request, Response, Application } from 'express';
import { GarantiasController } from '../controllers/Garantias.controller';

export class GarantiasRoutes {
    public garantiasController: GarantiasController = new GarantiasController();

    public routes(app: Application): void {
        app.route('/garantias').get(this.garantiasController.getAllGarantias);
        app.route('/garantias/:id').get(this.garantiasController.getOneGarantias);
        app.route('/garantias').post(this.garantiasController.createGarantias);
        app.route('/garantias/:id').put(this.garantiasController.updateGarantias);
        app.route('/garantias/:id').delete(this.garantiasController.deleteGarantias);
    }
}
