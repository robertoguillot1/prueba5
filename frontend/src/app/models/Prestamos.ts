export interface PrestamosI {
    cliente_Id: number;
    empleado_Id: string;
    fechaPrestamo: Date;
    monto: number;
    interes: number;
    estado: string;
}
