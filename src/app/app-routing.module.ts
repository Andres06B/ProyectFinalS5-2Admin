import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './web/pages/inicio/inicio.component';
import { AsociadosComponent } from './web/pages/asociados/asociados.component';
import { NosotrosComponent } from './web/pages/nosotros/nosotros.component';
import { ContactosComponent } from './web/pages/contactos/contactos.component';
import { LoginComponent } from './web/pages/login/login.component';
import { Error404Component } from './web/pages/error404/error404.component';
import { Dashboard1Component } from './Dashboard/pages/dashboard1/dashboard1.component';
import { HabitacionesComponent } from './Dashboard/pages/habitaciones/habitaciones.component';
import { ReservasComponent } from './Dashboard/pages/reservas/reservas.component';
import { GraficosComponent } from './Dashboard/pages/graficos/graficos.component';
import { BienvenidaComponent } from './web/pages/bienvenida/bienvenida.component';
import { UsuariosComponent } from './Dashboard/pages/usuarios/usuarios.component';
import { PagosComponent } from './Dashboard/pages/pagos/pagos.component';

const routes: Routes = [
  { path: '', redirectTo: 'Inicio', pathMatch: 'full' },

  { path: 'Inicio', component: InicioComponent },

  {
    path:'Inicio',
    component: InicioComponent
  },

  {
    path:'asociados',
    component: AsociadosComponent
  },

  {
    path:'nosotros',
    component: NosotrosComponent
  },
  {
    path:'contactos',
    component: ContactosComponent
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard1',
    component: Dashboard1Component
  },
  {
    path: 'habitaciones',
    component: HabitacionesComponent
  },
  {
    path: 'reservas',
    component: ReservasComponent
  },
  {
    path: 'bienvenida',
    component: BienvenidaComponent
  },
  {
    path: 'graficos',
    component: GraficosComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'pagos',
    component: PagosComponent
  },
  {
    path: 'eror404',
    component: Error404Component
  },
  { path: '**', 
    component: Error404Component 
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
