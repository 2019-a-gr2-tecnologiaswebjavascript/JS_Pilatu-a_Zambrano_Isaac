import { HttpSailsPrincipal } from './http-sails-principal';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Producto } from '../../dto/producto';

@Injectable()
export class ProductoHttpService extends HttpSailsPrincipal<Producto>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient, environment.url, '/Producto');
    }

    cargarArchivo(archivo: File, idProducto: number){
        // Formulario virtual
        const formulario: FormData = new FormData();
        formulario.append('imagen', archivo, archivo.name);
        formulario.append('nombre', 'Isaac');
        formulario.append('apellido', 'Pilatuña');
        formulario.append('sueldo', '150');
        const cabeceras: HttpHeaders = new HttpHeaders();
        cabeceras.append('Content-Type', 'multipart/form-data');
        cabeceras.append('Accept', 'application/json');

        const opciones = {headers: cabeceras};
        const url = `${this.url}/cargarArchivo/${idProducto}`;
        return this._httpClient.post(url, formulario, opciones);
    }
}
