import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import { CarritoService } from './servicios/carrito/carrito.service';
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';
import { ProductoTiendaHttpService } from './servicios/http/producto-tienda-http.service';
import { TiendaHttpService } from './servicios/http/tienda-http.service';
import { ProductoHttpService } from './servicios/http/producto-http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ //SE ANOTAN LOS COMPONENTES
    AppComponent,
    ItemGaleriaComponent,
    MostrarCarritoComponent
  ],
  imports: [  //OTROS MODULOS
    BrowserModule,
    HttpClientModule //DIRECTIVA
  ],
  providers: [ //SERVICIOS
    CarritoService,
    ProductoTiendaHttpService,
    TiendaHttpService,
    ProductoHttpService,
    HttpClient

  ],
  bootstrap: [ //COMPONENTE PRINCIPAL
    AppComponent
  
  ]
})
export class AppModule { }