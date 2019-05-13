import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  estaLogeado:boolean=false;
  constructor(private readonly _router:Router) { }

  login (password:string, usuario:string){
    if(password=='12345' && usuario=='isaac'){
      this.estaLogeado=true;
      
      const url=['/creditos', '1', 12.00];
      const parametros={
        queryParams:{
          nombre:'Isaac',
          apellido:'Pilatuña',
          edad:22
        }
      }
      this._router.navigate(url,parametros);
      return true;
    }else{
      return false;
    }
  }

  logout(){
    this.estaLogeado=false;
  }
}


