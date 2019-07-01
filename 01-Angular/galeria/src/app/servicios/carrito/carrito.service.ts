import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../../interfaces/item-carrito-compras';
import { HttpClient } from '@angular/common/http';
import { ProductoTiendaHttpService } from '../http/producto-tienda-http.service';

@Injectable()
export class CarritoService{
    carritoCompras:ItemCarritoCompras[]=[];
    
  constructor(
    private readonly _httpClient : HttpClient,
    private readonly _productoTiendaHttpService:ProductoTiendaHttpService,
    

    ){

  }
    agregarCarritoDeCompras(itemCarrito:ItemCarritoCompras)
    :ItemCarritoCompras[]{
        const valorBuscado:string=itemCarrito.valor;
        const tiendaBuscada:string=itemCarrito.nombreTienda;
        let indiceItem=-1;
        let idItem=-1;
        const existeElItem = this.carritoCompras
                            .some(
                                (item:ItemCarritoCompras, indice:number)=>{
                                    if(item.valor==valorBuscado&&item.nombreTienda==tiendaBuscada){
                                        indiceItem=indice;
                                        idItem=item.valor.id;
                                        return true;
                                    }else{
                                        return false;
                                    }
                                    
                                }
                            );
        if(existeElItem){
            this.anadirAlContador(indiceItem,idItem);
            

        }else{
           this.anadirAlCarrito(itemCarrito,idItem);
        }
        //this.carritoCompras.find
        console.log('Se anadio al carrito ',itemCarrito);
        return this.carritoCompras;
    }

    private anadirAlContador(indice:number,idItem){
        this.carritoCompras[indice].cantidad++;
        const usuarioUpdate$ =this._productoTiendaHttpService
                              .actualizar(
                                {cantidad:this.carritoCompras[indice].cantidad,
                                fkTienda:1,
                                fkProducto:1
                                },
                                indice);
      
        usuarioUpdate$.subscribe(
          (usuarioUpdated)=>{
            console.log(usuarioUpdated);
          },
          (error)=>{
            console.log(error);
          }
        );
    }

    private anadirAlCarrito(item:ItemCarritoCompras,idItem){
        item.cantidad=1;
        this.carritoCompras.splice(0,0,item);
        const productoTiendaCrear$ = this._productoTiendaHttpService
        .crear(
          {cantidad:1,
            fkTienda:1,
            fkProducto:1
        });

        productoTiendaCrear$.subscribe(
             (nuevoProductoUsuario)=>{
             console.log(nuevoProductoUsuario);
             },
             (error)=>{
             console.log(error);
             }
         );
    }
}

/* 
[1,2,3,4].forEach(busqueda);

function busqueda(valor, indice, arreglo){
    console.log('Valor: ',valor);
    console.log('Indice: ',indice);
    console.log('Arreglo: ',arreglo);
}

const respuestaFind=[1,2,3,4].find(
    (valor:number):boolean =>{
        return valor===5;
    }

);
console.log('Respuesta Find: ',respuestaFind);

const respuestaSome=[1,2,3,4].some(
    (valor:number):boolean =>{
        return valor===5;
    }

);
console.log('Respuesta Some: ',respuestaSome);

const respuestaEvery=[1,2,3,4].every(
    (valor:number):boolean =>{
        return valor>0;
    }

);
console.log('Respuesta Every: ',respuestaEvery);
*/