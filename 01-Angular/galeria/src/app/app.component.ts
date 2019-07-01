import { Component, OnInit } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';
import { HttpClient } from '@angular/common/http';
import { ProductoHttpService } from './servicios/http/producto-http.service';
import { TiendaHttpService } from './servicios/http/tienda-http.service';
import { ProductoTiendaHttpService } from './servicios/http/producto-tienda-http.service';
import { Tienda } from './dto/tienda';
import { Producto } from './dto/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Floreria';
  tittleColor="rojo";
  estaMostrando=false;
  arregloFlores = [
    new Flor("Papitas","A lo bestia"),
    new Flor("Carnitas","Gorditas"),
    new Flor("Chicas","Cheveres")
  ];

  arregloTiendas:Tienda[]=[];
  arregloProductos:Producto[]=[];
  
  arregloFloresJs = [
    {
      titulo:"Don José",
      nombre:"Papitas",
      descripcion:"A lo bestia",
      productos:[
        'Papitas',
        'Empanadas',
        'Fritadas'
      ]
    },
    {
      titulo:"Don Pepito",
      nombre:"Carnitas",
      descripcion:"Gorditas",
      productos:[
        'Motes',
        'Fritadas',
        'Papitas'
      ]
    },
    {
      titulo:"Doña Lucha",
      nombre:"Chicas",
      descripcion:"Cheveres",
      productos:[
        'Tortas',
        'Sanduches',
        'Papitas'
      ]
    }
  ]


  constructor(
    private readonly _carritoService:CarritoService,
    private readonly _httpClient : HttpClient,
    private readonly _productoHttpService:ProductoHttpService,
    private readonly _tiendaHttpService:TiendaHttpService,
    private readonly _productoTiendaHttpService:ProductoTiendaHttpService,
    

    ){

  }


  ngOnInit(){

    const todasTiendasGet$ = this._tiendaHttpService.obtenerTodos();
    todasTiendasGet$.subscribe(
      (tiendasObtenidas)=>{
        this.arregloTiendas=tiendasObtenidas;
        console.log(this.arregloTiendas);
      },
      (error)=>{
        console.log(error);
      }
    );

    const todosProductosGet$ = this._productoHttpService.obtenerTodos();
    todosProductosGet$.subscribe(
      (productosObtenidos)=>{
        this.arregloProductos=productosObtenidos;
        console.log(this.arregloProductos);
      },
      (error)=>{
        console.log(error);
      }
    );
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
