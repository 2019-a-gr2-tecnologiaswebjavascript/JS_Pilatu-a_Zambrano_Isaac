import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';
  tittleColor="rojo";
  estaMostrando=false;
  arregloFlores = [
    new Flor("Papitas","A lo bestia"),
    new Flor("Carnitas","Gorditas"),
    new Flor("Chicas","Cheveres")
  ];

  arregloFloresJs = [
    {
      titulo:"Don José",
      nombre:"Papitas",
      descripcion:"A lo bestia",
      productos:[
        'Papitas',
        'Empanadas'
      ]
    },
    {
      titulo:"Don Pepito",
      nombre:"Carnitas",
      descripcion:"Gorditas",
      productos:[
        'Motes',
        'Fritadas'
      ]
    },
    {
      titulo:"Doña Lucha",
      nombre:"Chicas",
      descripcion:"Cheveres",
      productos:[
        'Tortas',
        'Sanduches'
      ]
    }
  ]


  constructor(private readonly _carritoService:CarritoService){

  }

  cambioChela(evento:boolean){
    // logica hacerle verde
    console.log('Llego a chela: ', evento);
    this.tittleColor="verde";
  }

  cambioCerveza(evento:boolean){
    // logica hacerle amarillo
    console.log('Llego a cerveza: ', evento);
    this.tittleColor="amarillo";
  }

  mostrar(estaMostrando:boolean){
    this.estaMostrando=estaMostrando;

  }

}

class Flor{
  constructor(
    public nombre: string,
    public descripcion:string){
  }
}
