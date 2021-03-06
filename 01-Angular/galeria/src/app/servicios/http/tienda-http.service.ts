import { HttpSailsPrincipal } from './http-sails-principal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Tienda } from '../../dto/tienda';

@Injectable()
export class TiendaHttpService extends HttpSailsPrincipal<Tienda>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient, environment.url, '/Tienda');
    }
}