import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaCreditosComponent } from './rutas/ruta-creditos/ruta-creditos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaProductosHogarComponent } from './rutas/ruta-productos-hogar/ruta-productos-hogar.component';
import { RutaProductosVideojuegosComponent } from './rutas/ruta-productos-videojuegos/ruta-productos-videojuegos.component';
import { VideojuegoCategoriaMmorpgComponent } from './rutas/ruta-categorias-videojuegos/videojuego-categoria-mmorpg/videojuego-categoria-mmorpg.component';
import { VideojuegoCategoriaEstrategiaComponent } from './rutas/ruta-categorias-videojuegos/videojuego-categoria-estrategia/videojuego-categoria-estrategia.component';
import { EstaLogeadoService } from './servicios/esta-logeado/esta-logeado.service';
import { AuthServiceService } from './servicios/auth/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaCreditosComponent,
    RutaProductosComponent,
    RutaNotFoundComponent,
    RutaProductosHogarComponent,
    RutaProductosVideojuegosComponent,
    VideojuegoCategoriaMmorpgComponent,
    VideojuegoCategoriaEstrategiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EstaLogeadoService,
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
