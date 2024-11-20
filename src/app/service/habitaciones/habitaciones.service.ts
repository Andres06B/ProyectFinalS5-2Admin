import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HabitacionesInterface } from '../../interface/habitaciones/habitaciones.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  private baseUrl = 'http://localhost:8080/habitacion';

  constructor(private http: HttpClient) { 
  }

  obtenerHabitaciones(): Observable<HabitacionesInterface[]> {
    return this.http.get<HabitacionesInterface[]>(this.baseUrl);
  }

  obtenerHabitacion(id: number): Observable<HabitacionesInterface> {
    return this.http.get<HabitacionesInterface>(this.baseUrl + '/' + id);
  }
}
