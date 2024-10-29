import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Personas } from './Personas';


export class Clientes extends Model {
    public persona_Id!: number;
}

export interface ClientesI {
    persona_Id: number;
}

Clientes.init(
    {
    },
    {
        sequelize: database,
        modelName: 'Clientes',
        timestamps: true
    }
);
Clientes.belongsTo(Personas, { foreignKey: 'persona_Id' });
Personas.hasMany(Clientes, { foreignKey: 'persona_Id' });
