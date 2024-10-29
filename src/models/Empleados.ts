import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Personas } from './Personas';
import { Sucursales } from './Sucursales';


export class Empleados extends Model {
    public persona_Id!: number;
    public sucursal_Id!: number;
}

export interface EmpleadosI {
    persona_Id: number;
    sucursal_Id: number;
}

Empleados.init(
    {
    },
    {
        sequelize: database,
        modelName: 'Empleados',
        timestamps: true
    }
);
Empleados.belongsTo(Personas, { foreignKey: 'persona_Id' });
Personas.hasMany(Empleados, { foreignKey: 'persona_Id' });
Empleados.belongsTo(Sucursales, { foreignKey: 'sucursal_Id' });
Sucursales.hasMany(Empleados, { foreignKey: 'sucursal_Id' });
