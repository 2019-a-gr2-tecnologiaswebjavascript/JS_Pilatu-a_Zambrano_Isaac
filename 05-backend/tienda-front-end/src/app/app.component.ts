import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioHttpService } from './servicios/http/usuario-http.service';
import { ProductoHttpService } from './servicios/http/producto-http.service';
import { ProductoUsuarioHttpService } from './servicios/http/producto-usuario-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda-frontend';
  constructor(private readonly _httpClient : HttpClient,
              private readonly _usuarioHttpService : UsuarioHttpService,
              private readonly _productoHttpService:ProductoHttpService,
              private readonly _productoUsuarioService:ProductoUsuarioHttpService) {

}

  ngOnInit(){

    const usuarioCrear$ = this._usuarioHttpService
                            .crear(
                              {nombre:'Mariano', 
                              apellido: 'Torres',
                              cedula:'1525252510',
                              username:'marianito',
                              correo:'marianito@hotmail.com',
                              estaCasado:false,
                              sueldo:350,
                              tipoUsuario:'pendiente'
                            });

    usuarioCrear$.subscribe(
                  (nuevoUsuario)=>{
                    console.log(nuevoUsuario);
                  },
                  (error)=>{
                    console.log(error);
                  }
    );

    const productoCrear$ = this._productoHttpService
                            .crear(
                              {nombre:'Desodorante AXE',
                                codigo: 'DES-555' 
                            });

    productoCrear$.subscribe(
                  (nuevoProducto)=>{
                    console.log(nuevoProducto);
                  },
                  (error)=>{
                    console.log(error);
                  }
    );

    const productoUsuarioCrear$ = this._productoUsuarioService
                            .crear(
                              {cantidad:7,
                                fkUsuario:1,
                                fkProducto:2
                            });

    productoUsuarioCrear$.subscribe(
                  (nuevoProductoUsuario)=>{
                    console.log(nuevoProductoUsuario);
                  },
                  (error)=>{
                    console.log(error);
                  }
    );



    /*
    const usuarioBorrar$ =this._usuarioHttpService
                          .eliminar(4);
  
    usuarioBorrar$.subscribe(
      (usuarioBorrado)=>{
        console.log(usuarioBorrado);
      },
      (error)=>{
        console.log(error);
      }
    );

    const usuarioUpdate$ =this._usuarioHttpService
                          .actualizar(
                            {nombre:' Ángel',
                             apellido: 'Miguelillo',
                             cedula:'15252525',
                             username:'marianito',
                             correo:'marianito@hotmail.com',
                             estaCasado:false,
                             sueldo:350,
                             tipoUsuario:'pendiente'
                            },
                             1);
  
    usuarioUpdate$.subscribe(
      (usuarioUpdated)=>{
        console.log(usuarioUpdated);
      },
      (error)=>{
        console.log(error);
      }
    );

    const usuarioGet$ =this._usuarioHttpService
                          .obtenerPorID(1);
  
    usuarioGet$.subscribe(
      (usuarioObtenido)=>{
        console.log(usuarioObtenido);
      },
      (error)=>{
        console.log(error);
      }
    );


    const todosUsuariosGet$ =this._usuarioHttpService
                          .obtenerTodos();
  
    todosUsuariosGet$.subscribe(
      (usuariosObtenidos)=>{
        console.log(usuariosObtenidos);
      },
      (error)=>{
        console.log(error);
      }
    );

    const url = environment.url +"/Usuario";
    const listaUsuarios$ = this._httpClient.get(url);

    listaUsuarios$
      .subscribe(
        (datos)=>{
          console.log(datos);
        },
        (error)=>{
          console.log(error);
        }
      )
      */
  }

}
