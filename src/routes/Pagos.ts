import { Request, Response, Application } from 'express';
import { PagosController } from '../controllers/Pagos.controller';

export class PagosRoutes {
    public pagosController: PagosController = new PagosController();

    public routes(app: Application): void {
        app.route('/pagos').get(this.pagosController.getAllPagos);
        app.route('/pagos/:id').get(this.pagosController.getOnePagos);
        app.route('/pagos').post(this.pagosController.createPagos);
        app.route('/pagos/:id').put(this.pagosController.updatePagos);
        app.route('/pagos/:id').delete(this.pagosController.deletePagos);
    }
}
