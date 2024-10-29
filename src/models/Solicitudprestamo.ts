import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Clientes } from './Clientes';
import { Empleados } from './Empleados';
import { Tipoprestamo } from './Tipoprestamo';


export class Solicitudprestamo extends Model {
    public cliente_Id!: number;
    public empleado_Id!: number;
    public fechaSolicitud!: Date;
    public monto!: number;
    public estadoSolicitud!: string;
    public tipoPrestamo_Id!: number;
}

export interface SolicitudprestamoI {
    cliente_Id: number;
    empleado_Id: number;
    fechaSolicitud: Date;
    monto: number;
    estadoSolicitud: string;
    tipoPrestamo_Id: number;
}

Solicitudprestamo.init(
    {
        fechaSolicitud: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        monto: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: false,
        },
        estadoSolicitud: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: database,
        modelName: 'Solicitudprestamo',
        timestamps: true
    }
);
Solicitudprestamo.belongsTo(Clientes, { foreignKey: 'cliente_Id' });
Clientes.hasMany(Solicitudprestamo, { foreignKey: 'cliente_Id' });
Solicitudprestamo.belongsTo(Empleados, { foreignKey: 'empleado_Id' });
Empleados.hasMany(Solicitudprestamo, { foreignKey: 'empleado_Id' });
Solicitudprestamo.belongsTo(Tipoprestamo, { foreignKey: 'tipoPrestamo_Id' });
Tipoprestamo.hasMany(Solicitudprestamo, { foreignKey: 'tipoPrestamo_Id' });
