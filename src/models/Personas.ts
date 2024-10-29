import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';


export class Personas extends Model {
    public nombre!: string;
    public apellido!: string;
    public direccion!: string;
    public telefono!: string;
    public correo!: string;
}

export interface PersonasI {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    correo: string;
}

Personas.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: database,
        modelName: 'Personas',
        timestamps: true
    }
);
