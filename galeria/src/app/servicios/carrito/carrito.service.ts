import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../../interfaces/item-carrito-compras';

@Injectable()
export class CarritoService{
    carritoCompras:ItemCarritoCompras[]=[];
    
    agregarCarritoDeCompras(itemCarrito:ItemCarritoCompras)
    :ItemCarritoCompras[]{
        const valorBuscado:string=itemCarrito.valor;
        const tiendaBuscada:string=itemCarrito.nombreTienda;
        let indiceItem=-1;
        const existeElItem = this.carritoCompras
                            .some(
                                (item:ItemCarritoCompras, indice:number)=>{
                                    if(item.valor==valorBuscado&&item.nombreTienda==tiendaBuscada){
                                        indiceItem=indice;
                                        return true;
                                    }else{
                                        return false;
                                    }
                                    
                                }
                            );
        if(existeElItem){
            this.anadirAlContador(indiceItem);
        }else{
           this.anadirAlCarrito(itemCarrito);
        }
        //this.carritoCompras.find
        console.log('Se anadio al carrito ',itemCarrito);
        return this.carritoCompras;
    }

    private anadirAlContador(indice:number){
        this.carritoCompras[indice].cantidad++;
    }

    private anadirAlCarrito(item:ItemCarritoCompras){
        item.cantidad=1;
        this.carritoCompras.splice(0,0,item);
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