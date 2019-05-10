import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaCreditosComponent } from './rutas/ruta-creditos/ruta-creditos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaProductosHogarComponent } from './rutas/ruta-productos-hogar/ruta-productos-hogar.component';
import { RutaProductosVideojuegosComponent } from './rutas/ruta-productos-videojuegos/ruta-productos-videojuegos.component';
// tslint:disable-next-line: max-line-length
import { VideojuegoCategoriaMmorpgComponent } from './rutas/ruta-categorias-videojuegos/videojuego-categoria-mmorpg/videojuego-categoria-mmorpg.component';
// tslint:disable-next-line: max-line-length
import { VideojuegoCategoriaEstrategiaComponent } from './rutas/ruta-categorias-videojuegos/videojuego-categoria-estrategia/videojuego-categoria-estrategia.component';
const routes: Routes = [
  {path: 'home/app',
    component: RutaHomeComponent},
  {path: 'creditos/:idCredito/:tasaReferencia',
    component: RutaCreditosComponent},
    {path: 'productos',
      component: RutaProductosComponent,
      children: [
        {path: 'hogar',
        component: RutaProductosHogarComponent},
        {path: 'videojuegos',
        component: RutaProductosVideojuegosComponent,
        children: [
          {path: 'mmorpg',
          component: VideojuegoCategoriaMmorpgComponent},
          {path: 'estrategia',
          component: VideojuegoCategoriaEstrategiaComponent}
          ,
        ]},
      ]},
        {
          path: '',
          redirectTo: '/home/app',
          pathMatch: 'full'
        }
      ,
      {path: '**',
        component: RutaNotFoundComponent}
]

;


@NgModule({
  imports: [RouterModule.forRoot(routes,
  {useHash: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
