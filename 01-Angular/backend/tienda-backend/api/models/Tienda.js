

module.exports = {

  attributes: {

    nombre:{
      type:'string',
      required:true
    },
    arregloProductosTienda:{
      collection:'ProductosTienda',
      via:'fkTienda'
    }
  },

};

