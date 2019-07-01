

module.exports = {

  attributes: {

    cantidad:{
      type:'number',
      min:1
    }, //Configuracion Hijo
    fkTienda:{ //Nombre del campo FK
      model:'tienda', //Modelo a relacionarse (papa)
      required:true //OPCIONAL!!
    },
    fkProducto:{
      model:'producto',
      required:true
    }
  },

};

