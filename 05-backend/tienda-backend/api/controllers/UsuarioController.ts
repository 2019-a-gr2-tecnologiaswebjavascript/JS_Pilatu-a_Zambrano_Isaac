/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

};

// PROTOCOLO HTTP

// RESTFUL Web Services

// protocolo + ip + puerto + segmentoUrl + modelo

// http://192.168.10.110:1337/api/Usuario

// http://localhost:1337/Usuario

// 1) CREAR DATO

// POST
// http://localhost:1337/Usuario
// Body Params

// RESPUESTA -> NuevoRegistro
 
// 2) BUSCAR TODOS LOS DATOS

// GET
// http://localhost:1337/Usuario

// RESPUESTA -> Todos los Registros (Limit = 30)

// 3) BUSCAR AL USUARIO POR ID

// GET
// http://localhost:1337/Usuario/:id
// http://localhost:1337/Usuario/12

// RESPUESTA -> EL USUARIO


// 4) ACTUALIZAR USUARIO POR ID

// FETCH / PUT

// http://localhost:1337/Usuario/:id
// http://localhost:1337/Usuario/12

// ?RESPUESTA -> USUARIO ACTUALIZADO


// 5) BORRAR USUARIO POR ID

// DELETE
// http://localhost:1337/Usuario/:id
// http://localhost:1337/Usuario/12

// ?RESPUESTA -> USUARIO BORRADO

//localhost:1337 - Delta - Sails
//localhost:4200 - Gamma - Angular

//Bloqueado por defecto gracias al navegador
// No gastar recursos en quienes no requieren el servicio
//Crooss-Origin Resource Sharing