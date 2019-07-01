

module.exports.routes = {

  
  'GET /': { 
    view: 'pages/homepage' 
  },
  'GET /holaMundo':{
    action: 'usuario/saludar'
  },
  'POST /cargarArchivo/:idProducto':{
    action: 'usuario/upload'
  },
  'GET /descargarArchivo/:idProducto': { 
    action: 'usuario/download' 
  }


};
