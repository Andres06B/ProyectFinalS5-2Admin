import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../service/admin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  LoginForm: FormGroup;

  constructor(private router: Router, private admin: AdminService) {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {}

  redirectToMain() {
    setTimeout(() => {
      this.router.navigate(['/dashboard1']);
    }, 1000);
  }

  login() {
    if (this.LoginForm.valid) {
      const email = this.LoginForm.value.email;
      const password = this.LoginForm.value.password;
  
      this.admin.login(email, password).subscribe({
        next: (response: any) => {
          if (response.token) {
            this.admin.saveToken(response.token);
            console.log('Token guardado:' + response.token);
            this.redirectToMain();
          } else {
            console.error('Error: No se recibió un token en la respuesta');
          }
        },
        error: (error) => {
          console.error('Error en la solicitud de login:', error);
          this.router.navigate(['/error404']);
        }
      });
    }
  }
  
}
