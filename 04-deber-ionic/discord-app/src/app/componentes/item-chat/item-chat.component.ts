import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-chat',
  templateUrl: './item-chat.component.html',
  styleUrls: ['./item-chat.component.scss'],
})
export class ItemChatComponent implements OnInit {

@Input()
autor;

@Input()
mensaje;

@Input()
fecha:Date;

fechaSimplificada:String;

  constructor() { 
    
  }

  ngOnInit() {
    this.fechaSimplificada=this.fecha.toISOString().slice(0,10)+" "+this.fecha.getHours()+":"+this.fecha.getMinutes();
  }

}
