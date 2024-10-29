import { Request, Response } from 'express';
import { Sucursales, SucursalesI } from '../models/Sucursales';

export class SucursalesController {

    // Método para probar el controlador
    public async test(req: Request, res: Response): Promise<void> {
        try {
            res.send('Hola, método test para Sucursales');
        } catch (error) {
            res.status(500).json({ message: 'Error en test de Sucursales' });
        }
    }

    // Obtener todos los registros de Sucursales
    public async getAllSucursales(req: Request, res: Response) {
        try {
            const sucursales: SucursalesI[] = await Sucursales.findAll();
            res.status(200).json({ sucursales });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener registros de Sucursales', error });
        }
    }

    // Obtener un solo registro de Sucursales por ID
    public async getOneSucursales(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const sucursales: SucursalesI | null = await Sucursales.findOne({ 
                where: { id }
            });
            if (sucursales) {
                res.status(200).json(sucursales);
            } else {
                res.status(404).json({ message: "El registro de Sucursales no existe" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el registro de Sucursales" });
        }
    }

    // Crear un registro de Sucursales
    public async createSucursales(req: Request, res: Response): Promise<void> {
        try {
            const newSucursales: SucursalesI = await Sucursales.create(req.body);
            res.status(201).json(newSucursales);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el registro de Sucursales' });
        }
    }

    // Actualizar un registro de Sucursales por ID
    public async updateSucursales(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const sucursalesExist: SucursalesI | null = await Sucursales.findByPk(id);
            if (!sucursalesExist) {
                res.status(404).json({ message: "El registro de Sucursales no existe" });
            } else {
                await Sucursales.update(req.body, { where: { id } });
                const updatedSucursales: SucursalesI | null = await Sucursales.findByPk(id);
                res.status(200).json(updatedSucursales);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el registro de Sucursales' });
        }
    }

    // Eliminar un registro de Sucursales por ID
    public async deleteSucursales(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const sucursalesExist: SucursalesI | null = await Sucursales.findByPk(id);
            if (!sucursalesExist) {
                res.status(404).json({ message: "El registro de Sucursales no existe" });
            } else {
                await Sucursales.destroy({ where: { id } });
                res.status(200).json({ message: "Registro de Sucursales eliminado" });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el registro de Sucursales' });
        }
    }
}
