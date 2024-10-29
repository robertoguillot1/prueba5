import { Request, Response, Application } from 'express';
import { PersonasController } from '../controllers/Personas.controller';

export class PersonasRoutes {
    public personasController: PersonasController = new PersonasController();

    public routes(app: Application): void {
        app.route('/personas').get(this.personasController.getAllPersonas);
        app.route('/personas/:id').get(this.personasController.getOnePersonas);
        app.route('/personas').post(this.personasController.createPersonas);
        app.route('/personas/:id').put(this.personasController.updatePersonas);
        app.route('/personas/:id').delete(this.personasController.deletePersonas);
    }
}
