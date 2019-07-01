import { Tienda } from './tienda';
import { Producto } from './producto';

export interface ProductoTienda{

    id?: number;
    createdAt?: number;
    updatedAt?: number;
    cantidad: number;
    fkTienda: number | Tienda | any;
    fkProducto: number | Producto | any;
}
