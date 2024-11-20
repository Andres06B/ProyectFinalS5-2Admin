import { Component } from '@angular/core';
import { UsuarioService } from '../../../service/usuario/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  
  usuarios: any;
  constructor(private usuarioService: UsuarioService) { }
  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.obtenerUsuario().subscribe(
      (usuarios: any[]) => this.usuarios = usuarios
    );
  }

}
