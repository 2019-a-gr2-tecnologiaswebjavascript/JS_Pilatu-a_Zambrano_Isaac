

module.exports.routes = {

  
  'GET /': { 
    view: 'pages/homepage' 
  },
  'GET /holaMundo':{
    action: 'usuario/saludar'
  },
  'POST /cargarArchivo':{
    action: 'usuario/upload'
  }


};
