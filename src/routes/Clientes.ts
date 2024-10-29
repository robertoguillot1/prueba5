import { Request, Response, Application } from 'express';
import { ClientesController } from '../controllers/Clientes.controller';

export class ClientesRoutes {
    public clientesController: ClientesController = new ClientesController();

    public routes(app: Application): void {
        app.route('/clientes').get(this.clientesController.getAllClientes);
        app.route('/clientes/:id').get(this.clientesController.getOneClientes);
        app.route('/clientes').post(this.clientesController.createClientes);
        app.route('/clientes/:id').put(this.clientesController.updateClientes);
        app.route('/clientes/:id').delete(this.clientesController.deleteClientes);
    }
}
