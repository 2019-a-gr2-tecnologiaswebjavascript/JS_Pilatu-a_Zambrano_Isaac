/**
 * ProductoUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cantidad:{
      type:'number',
      min:1
    }, //Configuracion Hijo
    fkUsuario:{ //Nombre del campo FK
      model:'usuario', //Modelo a relacionarse (papa)
      required:true //OPCIONAL!!
    },
    fkProducto:{
      model:'producto',
      required:true
    }
  },

};

