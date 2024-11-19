import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservasInterface } from '../../interface/reservas/reservas.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  ApiUrlReserva = 'http://localhost:8080/api/v1/reserva';

  constructor(private http: HttpClient) { }

  obtenerReservas(): Observable<ReservasInterface[]>{
    return this.http.get<ReservasInterface[]>(this.ApiUrlReserva);
  }
}
