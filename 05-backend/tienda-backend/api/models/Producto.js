/**
 * Producto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type:'string',
      required:true
    },
    codigo:{
      type:'string',
      required:true,
      minLength:4
    },
    descriptorArchivo:{
      type:'string',

    },
    tamanio:{
      type:'string',

    },
    nombreArchivo:{
      type:'string',

    },
    tipo:{
      type:'string',
      
    },
    arregloProductosUsuario:{
      collection:'ProductoUsuario',
      via:'fkProducto'
    }

  },

};

