export interface SolicitudprestamoI {
    cliente_Id: number;
    empleado_Id: number;
    fechaSolicitud: Date;
    monto: number;
    estadoSolicitud: string;
    tipoPrestamo_Id: number;
}
