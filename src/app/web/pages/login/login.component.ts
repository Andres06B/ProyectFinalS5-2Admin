import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit() {
    // Aquí puedes manejar la lógica de autenticación
    // Si la autenticación es exitosa, rediriges al dashboard
    this.router.navigate(['/dashboard1']); // Cambia a la ruta que necesites
  }
}
