export interface Usuario{
    apellido: string;
    createdAt?: number;
    id?: number;
    nombre: string;
    updatedAt?: number;
    cedula: string;
    username: string;
    sueldo?: number;
    estaCasado?: boolean;
    tipoUsuario?: 'normal' | 'pendiente' | 'premium';
    correo?: string;
    arregloProductosUsuario?: any[];
}

