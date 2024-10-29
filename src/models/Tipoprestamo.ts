import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';


export class Tipoprestamo extends Model {
    public nombre!: string;
    public descripcion!: string;
    public interes!: number;
    public plazo!: number;
}

export interface TipoprestamoI {
    nombre: string;
    descripcion: string;
    interes: number;
    plazo: number;
}

Tipoprestamo.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        interes: {
            type: DataTypes.DECIMAL(3, 2),
            allowNull: false,
        },
        plazo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: database,
        modelName: 'Tipoprestamo',
        timestamps: true
    }
);
