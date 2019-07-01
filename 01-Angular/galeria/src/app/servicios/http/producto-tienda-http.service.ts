import { HttpSailsPrincipal } from './http-sails-principal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ProductoTienda } from '../../dto/producto-tienda';

@Injectable()
export class ProductoTiendaHttpService extends HttpSailsPrincipal<ProductoTienda>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient, environment.url, '/Tienda');
    }
}