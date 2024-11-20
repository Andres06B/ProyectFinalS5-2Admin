import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagosInterface } from '../../interface/pagos/pagos.interface';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  apiUrlPasarela = 'http://localhost:8080/pago';

  constructor(private http: HttpClient) { }

  obtenerPagos(): Observable<PagosInterface[]> {
    return this.http.get<PagosInterface[]>(this.apiUrlPasarela);
  }
    
}
