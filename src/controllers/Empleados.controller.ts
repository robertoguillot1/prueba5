import { Request, Response } from 'express';
import { Empleados, EmpleadosI } from '../models/Empleados';

export class EmpleadosController {

    // Método para probar el controlador
    public async test(req: Request, res: Response): Promise<void> {
        try {
            res.send('Hola, método test para Empleados');
        } catch (error) {
            res.status(500).json({ message: 'Error en test de Empleados' });
        }
    }

    // Obtener todos los registros de Empleados
    public async getAllEmpleados(req: Request, res: Response) {
        try {
            const empleados: EmpleadosI[] = await Empleados.findAll();
            res.status(200).json({ empleados });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener registros de Empleados', error });
        }
    }

    // Obtener un solo registro de Empleados por ID
    public async getOneEmpleados(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const empleados: EmpleadosI | null = await Empleados.findOne({ 
                where: { id }
            });
            if (empleados) {
                res.status(200).json(empleados);
            } else {
                res.status(404).json({ message: "El registro de Empleados no existe" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el registro de Empleados" });
        }
    }

    // Crear un registro de Empleados
    public async createEmpleados(req: Request, res: Response): Promise<void> {
        try {
            const newEmpleados: EmpleadosI = await Empleados.create(req.body);
            res.status(201).json(newEmpleados);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el registro de Empleados' });
        }
    }

    // Actualizar un registro de Empleados por ID
    public async updateEmpleados(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const empleadosExist: EmpleadosI | null = await Empleados.findByPk(id);
            if (!empleadosExist) {
                res.status(404).json({ message: "El registro de Empleados no existe" });
            } else {
                await Empleados.update(req.body, { where: { id } });
                const updatedEmpleados: EmpleadosI | null = await Empleados.findByPk(id);
                res.status(200).json(updatedEmpleados);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el registro de Empleados' });
        }
    }

    // Eliminar un registro de Empleados por ID
    public async deleteEmpleados(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const empleadosExist: EmpleadosI | null = await Empleados.findByPk(id);
            if (!empleadosExist) {
                res.status(404).json({ message: "El registro de Empleados no existe" });
            } else {
                await Empleados.destroy({ where: { id } });
                res.status(200).json({ message: "Registro de Empleados eliminado" });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el registro de Empleados' });
        }
    }
}
