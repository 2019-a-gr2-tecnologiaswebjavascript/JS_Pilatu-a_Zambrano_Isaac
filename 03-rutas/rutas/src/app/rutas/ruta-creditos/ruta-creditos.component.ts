import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css']
})
export class RutaCreditosComponent implements OnInit {

  constructor(private readonly _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Devuelve un observable
    // El signo de dolar significa que la variable es un observable
    const parametros$ = this._activatedRoute.params; // Parámetros de ruta
    const parametrosConsulta$ = this._activatedRoute.queryParams; // Paràmetros de consulta

    // No necesitan Catch ni Complete
    parametrosConsulta$.subscribe(
      (parametrosConsulta) => {
        console.log('Parámetros consulta: ', parametrosConsulta);
      }
    );



    parametros$.subscribe(
      (parametros) => { // Try
        console.log('Parámetros: ', parametros);
      },
      (error) => { // Catch
        console.log('Error: ', error);
      },
      () => { // Finally - opcional
        console.log('Completado');
      }
    );

  }

}
