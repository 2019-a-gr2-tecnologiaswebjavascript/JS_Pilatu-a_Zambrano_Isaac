import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/servicios/auth/auth-service.service';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {

  constructor(private readonly _authService:AuthServiceService) { }

  ngOnInit() {
  }

  login(){
    console.log('Estamos logeando');
    this._authService.login('12345','isaac');
  }

  logout(){
    console.log('Estamos saliendo');
    this._authService.logout();

  }
}
