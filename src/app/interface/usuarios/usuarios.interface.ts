import { mapToCanDeactivate } from "@angular/router"

export interface UsuariosInterface {
    id_usuario?: number;
    tipo_Documento: string;
    numero_Documento: string;
    nombre: string;
    apellido: string;
    email: string;
    fechaNacimiento: string;
    telefono: string;
    ciudad: string;
    pais: string;
    direccion: string;
    acompañantes?: Acompañante[];
} 
export interface Acompañante {
    id_acompañante?: number;
    Usuario: number;
    nombre: string;
    tipo_Documento: string;
    numero_Documento: string;
}