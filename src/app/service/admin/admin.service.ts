import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';


interface MyJwtPayload extends JwtPayload {
  nombre: string; 
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private baseUrl = 'http://localhost:8080/admin/login';
  private token = 'auth-token';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const user = { email, password };
    return this.http.post<any>(this.baseUrl, user);
  }

  saveToken(token: string) {
    localStorage.setItem(this.token, token);
  }

  getDecodedToken(): MyJwtPayload | null {
    const token = localStorage.getItem(this.token);
    return token ? jwtDecode<MyJwtPayload>(token) : null;
  }

}
