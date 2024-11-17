import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbardash',
  templateUrl: './navbardash.component.html',
  styleUrls: ['./navbardash.component.css']
})
export class NavbardashComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar?.classList.add("shadow-md");
      } else {
        navbar?.classList.remove("shadow-md");
      }
    });
  }

  logout(): void {
    const userConfirmed = confirm("¿Desea cerrar sesión? Será redirigido al login.");
    if (userConfirmed) {
      this.router.navigate(['/login']); 
    }
  }
}
