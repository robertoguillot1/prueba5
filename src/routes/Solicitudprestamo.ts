import { Request, Response, Application } from 'express';
import { SolicitudprestamoController } from '../controllers/Solicitudprestamo.controller';

export class SolicitudprestamoRoutes {
    public solicitudprestamoController: SolicitudprestamoController = new SolicitudprestamoController();

    public routes(app: Application): void {
        app.route('/solicitudprestamo').get(this.solicitudprestamoController.getAllSolicitudprestamo);
        app.route('/solicitudprestamo/:id').get(this.solicitudprestamoController.getOneSolicitudprestamo);
        app.route('/solicitudprestamo').post(this.solicitudprestamoController.createSolicitudprestamo);
        app.route('/solicitudprestamo/:id').put(this.solicitudprestamoController.updateSolicitudprestamo);
        app.route('/solicitudprestamo/:id').delete(this.solicitudprestamoController.deleteSolicitudprestamo);
    }
}
