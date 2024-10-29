import { Request, Response } from 'express';
import { Pagos, PagosI } from '../models/Pagos';

export class PagosController {

    // Método para probar el controlador
    public async test(req: Request, res: Response): Promise<void> {
        try {
            res.send('Hola, método test para Pagos');
        } catch (error) {
            res.status(500).json({ message: 'Error en test de Pagos' });
        }
    }

    // Obtener todos los registros de Pagos
    public async getAllPagos(req: Request, res: Response) {
        try {
            const pagos: PagosI[] = await Pagos.findAll();
            res.status(200).json({ pagos });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener registros de Pagos', error });
        }
    }

    // Obtener un solo registro de Pagos por ID
    public async getOnePagos(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const pagos: PagosI | null = await Pagos.findOne({ 
                where: { id }
            });
            if (pagos) {
                res.status(200).json(pagos);
            } else {
                res.status(404).json({ message: "El registro de Pagos no existe" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el registro de Pagos" });
        }
    }

    // Crear un registro de Pagos
    public async createPagos(req: Request, res: Response): Promise<void> {
        try {
            const newPagos: PagosI = await Pagos.create(req.body);
            res.status(201).json(newPagos);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el registro de Pagos' });
        }
    }

    // Actualizar un registro de Pagos por ID
    public async updatePagos(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const pagosExist: PagosI | null = await Pagos.findByPk(id);
            if (!pagosExist) {
                res.status(404).json({ message: "El registro de Pagos no existe" });
            } else {
                await Pagos.update(req.body, { where: { id } });
                const updatedPagos: PagosI | null = await Pagos.findByPk(id);
                res.status(200).json(updatedPagos);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el registro de Pagos' });
        }
    }

    // Eliminar un registro de Pagos por ID
    public async deletePagos(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const pagosExist: PagosI | null = await Pagos.findByPk(id);
            if (!pagosExist) {
                res.status(404).json({ message: "El registro de Pagos no existe" });
            } else {
                await Pagos.destroy({ where: { id } });
                res.status(200).json({ message: "Registro de Pagos eliminado" });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el registro de Pagos' });
        }
    }
}
