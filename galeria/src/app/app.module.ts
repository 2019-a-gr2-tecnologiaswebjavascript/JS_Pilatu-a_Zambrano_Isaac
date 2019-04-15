import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import { CarritoService } from './servicios/carrito/carrito.service';
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';

@NgModule({
  declarations: [ //SE ANOTAN LOS COMPONENTES
    AppComponent,
    ItemGaleriaComponent,
    MostrarCarritoComponent
  ],
  imports: [  //OTROS MODULOS
    BrowserModule //DIRECTIVA
  ],
  providers: [ //SERVICIOS
    CarritoService

  ],
  bootstrap: [ //COMPONENTE PRINCIPAL
    AppComponent
  
  ]
})
export class AppModule { }