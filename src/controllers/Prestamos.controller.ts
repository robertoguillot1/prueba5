import { Request, Response } from 'express';
import { Prestamos, PrestamosI } from '../models/Prestamos';

export class PrestamosController {

    // Método para probar el controlador
    public async test(req: Request, res: Response): Promise<void> {
        try {
            res.send('Hola, método test para Prestamos');
        } catch (error) {
            res.status(500).json({ message: 'Error en test de Prestamos' });
        }
    }

    // Obtener todos los registros de Prestamos
    public async getAllPrestamos(req: Request, res: Response) {
        try {
            const prestamos: PrestamosI[] = await Prestamos.findAll();
            res.status(200).json({ prestamos });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener registros de Prestamos', error });
        }
    }

    // Obtener un solo registro de Prestamos por ID
    public async getOnePrestamos(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const prestamos: PrestamosI | null = await Prestamos.findOne({ 
                where: { id }
            });
            if (prestamos) {
                res.status(200).json(prestamos);
            } else {
                res.status(404).json({ message: "El registro de Prestamos no existe" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el registro de Prestamos" });
        }
    }

    // Crear un registro de Prestamos
    public async createPrestamos(req: Request, res: Response): Promise<void> {
        try {
            const newPrestamos: PrestamosI = await Prestamos.create(req.body);
            res.status(201).json(newPrestamos);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el registro de Prestamos' });
        }
    }

    // Actualizar un registro de Prestamos por ID
    public async updatePrestamos(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const prestamosExist: PrestamosI | null = await Prestamos.findByPk(id);
            if (!prestamosExist) {
                res.status(404).json({ message: "El registro de Prestamos no existe" });
            } else {
                await Prestamos.update(req.body, { where: { id } });
                const updatedPrestamos: PrestamosI | null = await Prestamos.findByPk(id);
                res.status(200).json(updatedPrestamos);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el registro de Prestamos' });
        }
    }

    // Eliminar un registro de Prestamos por ID
    public async deletePrestamos(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const prestamosExist: PrestamosI | null = await Prestamos.findByPk(id);
            if (!prestamosExist) {
                res.status(404).json({ message: "El registro de Prestamos no existe" });
            } else {
                await Prestamos.destroy({ where: { id } });
                res.status(200).json({ message: "Registro de Prestamos eliminado" });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el registro de Prestamos' });
        }
    }
}
