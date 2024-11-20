import { Component } from '@angular/core';
import { PagosService } from '../../../service/pagos/pagos.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent {

  pagos: any;
  constructor(private pagosService: PagosService) { }


  obtenerPagos(){
    this.pagosService.obtenerPagos().subscribe(
      (pagos: any[]) => this.pagos = pagos
      
    );
  }

  ngOnInit() {
    this.obtenerPagos();
  }
}
