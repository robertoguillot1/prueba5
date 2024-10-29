import { Request, Response } from 'express';
import { Tipoprestamo, TipoprestamoI } from '../models/Tipoprestamo';

export class TipoprestamoController {

    // Método para probar el controlador
    public async test(req: Request, res: Response): Promise<void> {
        try {
            res.send('Hola, método test para Tipoprestamo');
        } catch (error) {
            res.status(500).json({ message: 'Error en test de Tipoprestamo' });
        }
    }

    // Obtener todos los registros de Tipoprestamo
    public async getAllTipoprestamo(req: Request, res: Response) {
        try {
            const tipoprestamo: TipoprestamoI[] = await Tipoprestamo.findAll();
            res.status(200).json({ tipoprestamo });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener registros de Tipoprestamo', error });
        }
    }

    // Obtener un solo registro de Tipoprestamo por ID
    public async getOneTipoprestamo(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const tipoprestamo: TipoprestamoI | null = await Tipoprestamo.findOne({ 
                where: { id }
            });
            if (tipoprestamo) {
                res.status(200).json(tipoprestamo);
            } else {
                res.status(404).json({ message: "El registro de Tipoprestamo no existe" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el registro de Tipoprestamo" });
        }
    }

    // Crear un registro de Tipoprestamo
    public async createTipoprestamo(req: Request, res: Response): Promise<void> {
        try {
            const newTipoprestamo: TipoprestamoI = await Tipoprestamo.create(req.body);
            res.status(201).json(newTipoprestamo);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el registro de Tipoprestamo' });
        }
    }

    // Actualizar un registro de Tipoprestamo por ID
    public async updateTipoprestamo(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const tipoprestamoExist: TipoprestamoI | null = await Tipoprestamo.findByPk(id);
            if (!tipoprestamoExist) {
                res.status(404).json({ message: "El registro de Tipoprestamo no existe" });
            } else {
                await Tipoprestamo.update(req.body, { where: { id } });
                const updatedTipoprestamo: TipoprestamoI | null = await Tipoprestamo.findByPk(id);
                res.status(200).json(updatedTipoprestamo);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el registro de Tipoprestamo' });
        }
    }

    // Eliminar un registro de Tipoprestamo por ID
    public async deleteTipoprestamo(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const tipoprestamoExist: TipoprestamoI | null = await Tipoprestamo.findByPk(id);
            if (!tipoprestamoExist) {
                res.status(404).json({ message: "El registro de Tipoprestamo no existe" });
            } else {
                await Tipoprestamo.destroy({ where: { id } });
                res.status(200).json({ message: "Registro de Tipoprestamo eliminado" });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el registro de Tipoprestamo' });
        }
    }
}
