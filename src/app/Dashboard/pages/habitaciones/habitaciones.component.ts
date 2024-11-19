import { Component } from '@angular/core';
import { HabitacionesService } from '../../../service/habitaciones/habitaciones.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {
  habitaciones: any[] = [];

  constructor(private habitacionesService: HabitacionesService) { }
  
  ngOnInit() {
    this.obtenerHabitaciones();
  }

  obtenerHabitaciones(){
    this.habitacionesService.obtenerHabitaciones().subscribe(
      (habitaciones: any[]) => this.habitaciones = habitaciones,
      (error) => console.error('Error al obtener habitaciones:', error)
    );
  }



}
