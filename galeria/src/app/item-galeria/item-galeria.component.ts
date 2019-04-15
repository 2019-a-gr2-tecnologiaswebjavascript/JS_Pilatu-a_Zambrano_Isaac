import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit, OnDestroy {

  title = 'Licoreria';

  @Input()
  titulo;

  @Input()
  textoBoton;   

  @Input()
  nombreItem;

  @Output()
  cambioChela: EventEmitter<boolean> = new EventEmitter()

  @Output()
  cambioCerveza: EventEmitter<boolean> = new EventEmitter()

  url = "http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg";

  notas = [1,2,3,4,5,6,7,8,9,10]

  // INJECCION DE DEPENDENCIAS
  //SERVICIOS COMPARTIDOS EN COMPONENTES
  // SERVICIOS PUEDES SER COMPARTIDOS EN OTROS SERVICIOS
  constructor(private readonly _carritoService:CarritoService) { }

  ngOnInit() {
    
    console.log('Empieza');
    console.log(this._carritoService.carritoCompras)
  }

  ngOnDestroy(){
    console.log('Termina');
  }

  agregarCarrito(valorCarrito:number){
    //this._carritoService.carritoCompras.push(valorCarrito);
    const itemCarrito={
      valor:valorCarrito,
      nombreTienda:this.titulo
    };
    this._carritoService.carritoCompras.splice(0,0,itemCarrito);
    console.log(this._carritoService.carritoCompras);
  }

  alertar(){
    alert('Auxilio me desmayo: ' + this.nombreItem);
  }

  alertarBlur(){
    alert('Alertar blur');
  }

  cambiarImagen(){
    const cervezas = "https://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpg"
    const chelas = "http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg"
    if(this.url === cervezas){
      this.url = chelas;
      this.cambioChela.emit(true);
    }else{
      this.url = cervezas;
      this.cambioCerveza.emit(true);
    }
    // var url2 = "http://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpghttp://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpg"
    // let url3 = "http://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpghttp://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpg"
    // this.url = url1;
  }


}

/*
@DecoratorsClase() 
class Usuario{
  @DecoratorsVariable()
  private nombre = 'Adrian';
  constructor(@DecoratorsConstructor() nombre){
  }
  @DecoratorsMetodo()
 metodoPublico(){
 }
 private metodoPrivado(){
 }
 protected metodoProtected(){
 }
}
*/

/*
Ciclo de vida del componente
ngOnInit -> OnInit -> Instancia

ngOnDestroy -> OnDestroy

*/

/*
- RUTA
  - PAPA
    - HIJO
      - NIETO
    - HIJA
  - TIO
    - PRIMO

  PRIMERA FORMA DE COMUNICACION
  Si un padre quiere comunicarse con un hijo utiliza property binding
  Si un hijo quiere comunicarse con un padre utiliza event binding

  SEGUNDA FORMA DE COMUNICACION
  # ModuloPrincipal (AppModule)
    * ComponentePrincipal (AppComponent)
  # ModuloNotas (NotasModule)
    * TablaMostrarMateria
      _ [] notasPorMateria
      _ [] nombreBoton
      _ [] iconoBoton
      _ () ejecutoAccion
    * listaMaterias
      _ () seleccionoMateria
    
      [Javascript] -> ()-> seleccionoJavascript
*/


