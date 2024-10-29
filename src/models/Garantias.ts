import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Prestamos } from './Prestamos';


export class Garantias extends Model {
    public prestamo_Id!: number;
    public tipoGarantia!: string;
    public valor!: number;
    public descripcion!: string;
}

export interface GarantiasI {
    prestamo_Id: number;
    tipoGarantia: string;
    valor: number;
    descripcion: string;
}

Garantias.init(
    {
        tipoGarantia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        valor: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize: database,
        modelName: 'Garantias',
        timestamps: true
    }
);
Garantias.belongsTo(Prestamos, { foreignKey: 'prestamo_Id' });
Prestamos.hasMany(Garantias, { foreignKey: 'prestamo_Id' });
