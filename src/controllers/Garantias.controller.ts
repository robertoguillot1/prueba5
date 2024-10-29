import { Request, Response } from 'express';
import { Garantias, GarantiasI } from '../models/Garantias';

export class GarantiasController {

    // Método para probar el controlador
    public async test(req: Request, res: Response): Promise<void> {
        try {
            res.send('Hola, método test para Garantias');
        } catch (error) {
            res.status(500).json({ message: 'Error en test de Garantias' });
        }
    }

    // Obtener todos los registros de Garantias
    public async getAllGarantias(req: Request, res: Response) {
        try {
            const garantias: GarantiasI[] = await Garantias.findAll();
            res.status(200).json({ garantias });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener registros de Garantias', error });
        }
    }

    // Obtener un solo registro de Garantias por ID
    public async getOneGarantias(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const garantias: GarantiasI | null = await Garantias.findOne({ 
                where: { id }
            });
            if (garantias) {
                res.status(200).json(garantias);
            } else {
                res.status(404).json({ message: "El registro de Garantias no existe" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el registro de Garantias" });
        }
    }

    // Crear un registro de Garantias
    public async createGarantias(req: Request, res: Response): Promise<void> {
        try {
            const newGarantias: GarantiasI = await Garantias.create(req.body);
            res.status(201).json(newGarantias);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el registro de Garantias' });
        }
    }

    // Actualizar un registro de Garantias por ID
    public async updateGarantias(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const garantiasExist: GarantiasI | null = await Garantias.findByPk(id);
            if (!garantiasExist) {
                res.status(404).json({ message: "El registro de Garantias no existe" });
            } else {
                await Garantias.update(req.body, { where: { id } });
                const updatedGarantias: GarantiasI | null = await Garantias.findByPk(id);
                res.status(200).json(updatedGarantias);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el registro de Garantias' });
        }
    }

    // Eliminar un registro de Garantias por ID
    public async deleteGarantias(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const garantiasExist: GarantiasI | null = await Garantias.findByPk(id);
            if (!garantiasExist) {
                res.status(404).json({ message: "El registro de Garantias no existe" });
            } else {
                await Garantias.destroy({ where: { id } });
                res.status(200).json({ message: "Registro de Garantias eliminado" });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el registro de Garantias' });
        }
    }
}
