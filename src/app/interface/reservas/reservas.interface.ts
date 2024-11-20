export interface ReservasInterface {
  id: number;
  fecha_Reserva: Date;
  fecha_Entrada: Date;
  fecha_Salida: Date;
  estado: string;
  id_Usuario: number;
  id_Habitacion: number;
}
