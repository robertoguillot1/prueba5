import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Prestamos } from './Prestamos';


export class Pagos extends Model {
    public prestamo_Id!: number;
    public fecha!: Date;
    public estado!: string;
    public monto!: number;
}

export interface PagosI {
    prestamo_Id: number;
    fecha: Date;
    estado: string;
    monto: number;
}

Pagos.init(
    {
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        monto: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: false,
        },
    },
    {
        sequelize: database,
        modelName: 'Pagos',
        timestamps: true
    }
);
Pagos.belongsTo(Prestamos, { foreignKey: 'prestamo_Id' });
Prestamos.hasMany(Pagos, { foreignKey: 'prestamo_Id' });
