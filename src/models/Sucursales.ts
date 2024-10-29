import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';


export class Sucursales extends Model {
    public nombre!: string;
    public direccion!: string;
}

export interface SucursalesI {
    nombre: string;
    direccion: string;
}

Sucursales.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: database,
        modelName: 'Sucursales',
        timestamps: true
    }
);
