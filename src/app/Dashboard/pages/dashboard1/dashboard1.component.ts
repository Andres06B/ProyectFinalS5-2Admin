import { Component } from '@angular/core';
import { HabitacionesService } from '../../../service/habitaciones/habitaciones.service';
import { PagosService } from '../../../service/pagos/pagos.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrl: './dashboard1.component.css',
})
export class Dashboard1Component {
  habitacion: any;
  pago: any;

  pagosTotales: number = 0;
  pagosEnProceso: number = 0;
  pagosNoRealizados: number = 0;

  constructor(
    private Habitaciones: HabitacionesService,
    private Pagos: PagosService
  ) {}
  ngOnInit() {
    this.obtenerHabitaciones();
    this.obtenerPagos();
  }

  obtenerHabitaciones() {
    this.Habitaciones.obtenerHabitaciones().subscribe(
      (habitaciones: any[]) => (this.habitacion = habitaciones)
    );
  }

  obtenerPagos() {
    this.Pagos.obtenerPagos().subscribe((pagos: any[]) => {
      this.pago = pagos;

      this.pagosTotales = pagos
        .filter((p) => p.estado === 'realizado')
        .reduce((total, p) => total + p.monto, 0);

      this.pagosEnProceso = pagos
        .filter((p) => p.estado === 'pendiente')
        .reduce((total, p) => total + p.monto, 0);

      this.pagosNoRealizados = pagos
        .filter((p) => p.estado === 'cancelada')
        .reduce((total, p) => total + p.monto, 0);
    });
  }
}
