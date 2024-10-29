import { Request, Response, Application } from 'express';
import { PrestamosController } from '../controllers/Prestamos.controller';

export class PrestamosRoutes {
    public prestamosController: PrestamosController = new PrestamosController();

    public routes(app: Application): void {
        app.route('/prestamos').get(this.prestamosController.getAllPrestamos);
        app.route('/prestamos/:id').get(this.prestamosController.getOnePrestamos);
        app.route('/prestamos').post(this.prestamosController.createPrestamos);
        app.route('/prestamos/:id').put(this.prestamosController.updatePrestamos);
        app.route('/prestamos/:id').delete(this.prestamosController.deletePrestamos);
    }
}
