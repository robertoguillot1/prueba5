import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Clientes } from './Clientes';
import { Empleados } from './Empleados';


export class Prestamos extends Model {
    public cliente_Id!: number;
    public empleado_Id!: string;
    public fechaPrestamo!: Date;
    public monto!: number;
    public interes!: number;
    public estado!: string;
}

export interface PrestamosI {
    cliente_Id: number;
    empleado_Id: string;
    fechaPrestamo: Date;
    monto: number;
    interes: number;
    estado: string;
}

Prestamos.init(
    {
        fechaPrestamo: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        monto: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: false,
        },
        interes: {
            type: DataTypes.DECIMAL(3, 2),
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: database,
        modelName: 'Prestamos',
        timestamps: true
    }
);
Prestamos.belongsTo(Clientes, { foreignKey: 'cliente_Id' });
Clientes.hasMany(Prestamos, { foreignKey: 'cliente_Id' });
Prestamos.belongsTo(Empleados, { foreignKey: 'empleado_Id' });
Empleados.hasMany(Prestamos, { foreignKey: 'empleado_Id' });
