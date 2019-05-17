import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularios';
  nombreInput:string;
  apellidoInput:string;
  qInput:string;
  guardarUsuario(formulario) {
    console.log(formulario);
    this.nombreInput = 'Benito';
    this.apellidoInput = 'Camelo';
    this.qInput= 'Hackstore';
    
  }
}

