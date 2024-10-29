import { Request, Response, Application } from 'express';
import { TipoprestamoController } from '../controllers/Tipoprestamo.controller';

export class TipoprestamoRoutes {
    public tipoprestamoController: TipoprestamoController = new TipoprestamoController();

    public routes(app: Application): void {
        app.route('/tipoprestamo').get(this.tipoprestamoController.getAllTipoprestamo);
        app.route('/tipoprestamo/:id').get(this.tipoprestamoController.getOneTipoprestamo);
        app.route('/tipoprestamo').post(this.tipoprestamoController.createTipoprestamo);
        app.route('/tipoprestamo/:id').put(this.tipoprestamoController.updateTipoprestamo);
        app.route('/tipoprestamo/:id').delete(this.tipoprestamoController.deleteTipoprestamo);
    }
}
