import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Dashboard/components/sidebar/sidebar.component';
import { InicioComponent } from './web/pages/inicio/inicio.component';
import { AsociadosComponent } from './web/pages/asociados/asociados.component';
import { ContactosComponent } from './web/pages/contactos/contactos.component';
import { NosotrosComponent } from './web/pages/nosotros/nosotros.component';
import { NavbarWebComponent } from './web/components/navbar-web/navbar-web.component';
import { LoginComponent } from './web/pages/login/login.component';
import { Error404Component } from './web/pages/error404/error404.component';
import { FooterwebComponent } from './web/components/footerweb/footerweb.component';
import { Dashboard1Component } from './Dashboard/pages/dashboard1/dashboard1.component';
import { ReservasComponent } from './Dashboard/pages/reservas/reservas.component';
import { HabitacionesComponent } from './Dashboard/pages/habitaciones/habitaciones.component';
import { NavbardashComponent } from './Dashboard/components/navbardash/navbardash.component';
import { LayoutComponent } from './Dashboard/components/layout/layout.component';
import { GraficosComponent } from './Dashboard/pages/graficos/graficos.component';
import { BienvenidaComponent } from './web/pages/bienvenida/bienvenida.component';
import { UsuariosComponent } from './Dashboard/pages/usuarios/usuarios.component';
import { PagosComponent } from './Dashboard/pages/pagos/pagos.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InicioComponent,
    AsociadosComponent,
    ContactosComponent,
    NosotrosComponent,
    NavbarWebComponent,
    LoginComponent,
    Error404Component,
    FooterwebComponent,
    Dashboard1Component,
    ReservasComponent,
    HabitacionesComponent,
    NavbardashComponent,
    LayoutComponent,
    GraficosComponent,
    BienvenidaComponent,
    UsuariosComponent,
    PagosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
