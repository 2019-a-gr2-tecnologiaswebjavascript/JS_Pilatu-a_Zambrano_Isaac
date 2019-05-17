import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from '../servicios/mensajeria.service';
import { ItemMensaje } from '../interfaces/item-mensaje';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  nuevoMensaje:string='';
  mensajes:ItemMensaje[]=[
    

  ]

 
  constructor(private _mensajeriaService:MensajeriaService) {

  }

  agregarMensaje(){
    
    let fechaActual=new Date();
    
    const itemMensaje:ItemMensaje={
      mensaje:this.nuevoMensaje,
      fecha:fechaActual,
      fechaSimple:fechaActual.toISOString().slice(0,10)+" "+fechaActual.getHours()+":"+fechaActual.getMinutes()
    }
    const respuestaMensajeria:ItemMensaje[]= this._mensajeriaService.agregarMensaje(itemMensaje);
    this.mensajes = respuestaMensajeria;
    this.nuevoMensaje='';
  }
  ngOnInit() {
    this.mensajes=this._mensajeriaService.mensajes;
  }

}
