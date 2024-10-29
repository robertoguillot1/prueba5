import { Request, Response } from 'express';
import { Solicitudprestamo, SolicitudprestamoI } from '../models/Solicitudprestamo';

export class SolicitudprestamoController {

    // Método para probar el controlador
    public async test(req: Request, res: Response): Promise<void> {
        try {
            res.send('Hola, método test para Solicitudprestamo');
        } catch (error) {
            res.status(500).json({ message: 'Error en test de Solicitudprestamo' });
        }
    }

    // Obtener todos los registros de Solicitudprestamo
    public async getAllSolicitudprestamo(req: Request, res: Response) {
        try {
            const solicitudprestamo: SolicitudprestamoI[] = await Solicitudprestamo.findAll();
            res.status(200).json({ solicitudprestamo });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener registros de Solicitudprestamo', error });
        }
    }

    // Obtener un solo registro de Solicitudprestamo por ID
    public async getOneSolicitudprestamo(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const solicitudprestamo: SolicitudprestamoI | null = await Solicitudprestamo.findOne({ 
                where: { id }
            });
            if (solicitudprestamo) {
                res.status(200).json(solicitudprestamo);
            } else {
                res.status(404).json({ message: "El registro de Solicitudprestamo no existe" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el registro de Solicitudprestamo" });
        }
    }

    // Crear un registro de Solicitudprestamo
    public async createSolicitudprestamo(req: Request, res: Response): Promise<void> {
        try {
            const newSolicitudprestamo: SolicitudprestamoI = await Solicitudprestamo.create(req.body);
            res.status(201).json(newSolicitudprestamo);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el registro de Solicitudprestamo' });
        }
    }

    // Actualizar un registro de Solicitudprestamo por ID
    public async updateSolicitudprestamo(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const solicitudprestamoExist: SolicitudprestamoI | null = await Solicitudprestamo.findByPk(id);
            if (!solicitudprestamoExist) {
                res.status(404).json({ message: "El registro de Solicitudprestamo no existe" });
            } else {
                await Solicitudprestamo.update(req.body, { where: { id } });
                const updatedSolicitudprestamo: SolicitudprestamoI | null = await Solicitudprestamo.findByPk(id);
                res.status(200).json(updatedSolicitudprestamo);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el registro de Solicitudprestamo' });
        }
    }

    // Eliminar un registro de Solicitudprestamo por ID
    public async deleteSolicitudprestamo(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const solicitudprestamoExist: SolicitudprestamoI | null = await Solicitudprestamo.findByPk(id);
            if (!solicitudprestamoExist) {
                res.status(404).json({ message: "El registro de Solicitudprestamo no existe" });
            } else {
                await Solicitudprestamo.destroy({ where: { id } });
                res.status(200).json({ message: "Registro de Solicitudprestamo eliminado" });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el registro de Solicitudprestamo' });
        }
    }
}
