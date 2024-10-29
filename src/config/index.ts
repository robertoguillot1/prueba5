import express, { Application } from 'express';
import morgan from 'morgan';
import { Routes } from '../routes/index';
import cors from 'cors';

export class App {
    public app: Application;
    public routePrv: Routes = new Routes();

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
    }

        private routes() {
        this.routePrv.ClientesRoutes.routes(this.app);
        this.routePrv.SucursalesRoutes.routes(this.app);
        this.routePrv.PrestamosRoutes.routes(this.app);
        this.routePrv.TipoprestamoRoutes.routes(this.app);
        this.routePrv.PersonasRoutes.routes(this.app);
        this.routePrv.EmpleadosRoutes.routes(this.app);
        this.routePrv.SolicitudprestamoRoutes.routes(this.app);
        this.routePrv.GarantiasRoutes.routes(this.app);
        this.routePrv.PagosRoutes.routes(this.app);

    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}
