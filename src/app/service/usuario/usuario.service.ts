import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosInterface } from '../../interface/usuarios/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ApiUrlUser = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  obtenerUsuario(): Observable<UsuariosInterface[]>{
    return this.http.get<UsuariosInterface[]>(this.ApiUrlUser);
  }
}

