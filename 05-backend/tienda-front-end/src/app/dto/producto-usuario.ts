import { Usuario } from './usuario';
import { Producto } from './producto';

export interface ProductoUsuario{

    id?: number;
    createdAt?: number;
    updatedAt?: number;
    cantidad: number;
    fkUsuario: number | Usuario | any;
    fkProducto: number | Producto | any;
}

