import { Injectable } from '@angular/core';
import { ItemMensaje } from '../interfaces/item-mensaje';

@Injectable({
  providedIn: 'root'
})


export class MensajeriaService {
  mensajes:ItemMensaje[]=[];
  autor:string='Isaac';
  constructor() {
   }

   agregarMensaje(itemMensaje:ItemMensaje):ItemMensaje[]{
     itemMensaje.autor=this.autor;
    this.mensajes.push(itemMensaje);
    return this.mensajes;
  }

  setAutor(autor:string){
    this.autor=autor;
  }
}
