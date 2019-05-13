import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService implements CanActivate {
  
  canActivate(route: ActivatedRouteSnapshot,
              state:RouterStateSnapshot):boolean{
                console.log('Entrando a verificar si está logeado');
                if(this._authService.estaLogeado){
                  console.log('Bienvenido');
                  return this._authService.estaLogeado;
                }else{
                  const url=['/home','app'];
                  this._routerService.navigate(url);
                  console.log('No tiene permisos');
                }
  }

  constructor(private readonly _authService:AuthServiceService,
              private readonly _routerService:Router) { }
}
