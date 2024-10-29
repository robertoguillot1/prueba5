import { Request, Response } from 'express';
import { Clientes, ClientesI } from '../models/Clientes';

export class ClientesController {

    // Método para probar el controlador
    public async test(req: Request, res: Response): Promise<void> {
        try {
            res.send('Hola, método test para Clientes');
        } catch (error) {
            res.status(500).json({ message: 'Error en test de Clientes' });
        }
    }

    // Obtener todos los registros de Clientes
    public async getAllClientes(req: Request, res: Response) {
        try {
            const clientes: ClientesI[] = await Clientes.findAll();
            res.status(200).json({ clientes });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener registros de Clientes', error });
        }
    }

    // Obtener un solo registro de Clientes por ID
    public async getOneClientes(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const clientes: ClientesI | null = await Clientes.findOne({ 
                where: { id }
            });
            if (clientes) {
                res.status(200).json(clientes);
            } else {
                res.status(404).json({ message: "El registro de Clientes no existe" });
            }
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el registro de Clientes" });
        }
    }

    // Crear un registro de Clientes
    public async createClientes(req: Request, res: Response): Promise<void> {
        try {
            const newClientes: ClientesI = await Clientes.create(req.body);
            res.status(201).json(newClientes);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el registro de Clientes' });
        }
    }

    // Actualizar un registro de Clientes por ID
    public async updateClientes(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const clientesExist: ClientesI | null = await Clientes.findByPk(id);
            if (!clientesExist) {
                res.status(404).json({ message: "El registro de Clientes no existe" });
            } else {
                await Clientes.update(req.body, { where: { id } });
                const updatedClientes: ClientesI | null = await Clientes.findByPk(id);
                res.status(200).json(updatedClientes);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el registro de Clientes' });
        }
    }

    // Eliminar un registro de Clientes por ID
    public async deleteClientes(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const clientesExist: ClientesI | null = await Clientes.findByPk(id);
            if (!clientesExist) {
                res.status(404).json({ message: "El registro de Clientes no existe" });
            } else {
                await Clientes.destroy({ where: { id } });
                res.status(200).json({ message: "Registro de Clientes eliminado" });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el registro de Clientes' });
        }
    }
}
