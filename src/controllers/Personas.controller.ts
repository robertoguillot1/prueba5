import { Request, Response } from 'express';
import { Personas, PersonasI } from '../models/Personas';

export class PersonasController {

    // Método para probar el controlador
    public async test(req: Request, res: Response): Promise<void> {
        try {
            res.send('Hola, método test para Personas');
        } catch (error) {
            res.status(500).json({ message: 'Error en test de Personas' });
        }
    }

    // Obtener todos los registros de Personas
    public async getAllPersonas(req: Request, res: Response) {
        try {
            const personas: PersonasI[] = await Personas.findAll();
            res.status(200).json({ personas });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener registros de Personas', error });
        }
    }

    // Obtener un solo registro de Personas por ID
    public async getOnePersonas(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const personas: PersonasI | null = await Personas.findOne({ 
                where: { id }
            });
            if (personas) {
                res.status(200).json(personas);
            } else {
                res.status(404).json({ message: "El registro de Personas no existe" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el registro de Personas" });
        }
    }

    // Crear un registro de Personas
    public async createPersonas(req: Request, res: Response): Promise<void> {
        try {
            const newPersonas: PersonasI = await Personas.create(req.body);
            res.status(201).json(newPersonas);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el registro de Personas' });
        }
    }

    // Actualizar un registro de Personas por ID
    public async updatePersonas(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const personasExist: PersonasI | null = await Personas.findByPk(id);
            if (!personasExist) {
                res.status(404).json({ message: "El registro de Personas no existe" });
            } else {
                await Personas.update(req.body, { where: { id } });
                const updatedPersonas: PersonasI | null = await Personas.findByPk(id);
                res.status(200).json(updatedPersonas);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el registro de Personas' });
        }
    }

    // Eliminar un registro de Personas por ID
    public async deletePersonas(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const personasExist: PersonasI | null = await Personas.findByPk(id);
            if (!personasExist) {
                res.status(404).json({ message: "El registro de Personas no existe" });
            } else {
                await Personas.destroy({ where: { id } });
                res.status(200).json({ message: "Registro de Personas eliminado" });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el registro de Personas' });
        }
    }
}
