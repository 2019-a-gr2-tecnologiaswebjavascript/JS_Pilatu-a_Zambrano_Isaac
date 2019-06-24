import { HttpSailsPrincipal } from './http-sails-principal';
import { Usuario } from '../../dto/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class UsuarioHttpService extends HttpSailsPrincipal<Usuario>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient, environment.url, '/Usuario');
    }
}

//1) Buscar usuario nombre 'Isaac'
//http:localhost:1337/Usuario?nombre=Isaac

//2) Buscar usuario con nombre Isaac y cedula 172232322
//http:localhost:1337/Usuario?nombre=Isaac&cedula=172232322



//3) Traer los tres primeros usuarios
// http://localhost:1337/Usario?limit=3

//4) Traer los 3 primeros luego de 9
// http://localhost:1337/Usario?limit=3&skyp=9


//5) Ordenar por nombre
// http://localhost:1337/Usario?sort=nombre 
// http://localhost:1337/Usario?sort=nombre ASC
// http://localhost:1337/Usario?sort=nombre DESC

//6) Traer usuarios que contengan el string vic
// http://localhost:1337/Usario?where={"nombre":{"contains":"vic"}}

//6) Traer usuarios que tengan sueldo menor a 3000
// http://localhost:1337/Usario?where={"sueldo":{"<":3000}}

//7) Traer usuarios con correo gmail
// http://localhost:1337/Usario?where={"correo":{"endsWith":"gmail.com"}}

