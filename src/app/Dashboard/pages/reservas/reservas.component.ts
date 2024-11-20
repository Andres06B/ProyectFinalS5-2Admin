import { Component } from '@angular/core';
import { ReservasService } from '../../../service/reservas/reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
  reservas: any;

  constructor(private reservasService: ReservasService) { }

  ngOnInit() {
    this.obtenerReservas();
  }

  obtenerReservas(){
    this.reservasService.obtenerReservas().subscribe(
      (reservas: any) => this.reservas = reservas,
    );
  }
}
