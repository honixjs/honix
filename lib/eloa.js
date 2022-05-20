const http = require('http');

// ------------------- SERVER ---------------------------------------
function onServer(self) {
  var serverSettings = function(req, res){
    res.write(self['write']);
    res.end();
  }
  var server = http.createServer(serverSettings);

  server.listen(self["port"]);
};


// ------------------- LOGS OPTIONS---------------------------------------
function log(self, options = { color: 'default', record: false }){ 
  var str = "string";
  
  if (options && options.color) { 
    switch (options.color) { 
      case 'red': 
        if (typeof self === str) console.log( self.toUpperCase()+ "Vermelho"); 
        break; 
      case 'blue': 
        if (typeof self === str) console.log(self.toLowerCase() + "Azul"); 
        break;
      case 'yellow': 
        if (typeof self === str) console.log(self.toLowerCase()+ "Amarelo"); 
        break; 
      case 'pink': 
        if (typeof self === str) console.log(self.toLowerCase()+ "Rosa"); 
        break; 
      case 'orange': 
        if (typeof self === str) console.log(self.toLowerCase()+ "Laranja"); 
        break; 
      case 'green': 
        if (typeof self === str) console.log(self.toLowerCase()+ "Verde"); 
        break; 
      default: 
        console.log(self); 
    } 
  }

  if (options && options.record) if (options.record === true) console.log(`Registrar Logs ${self}`)
  
};

module.exports = {
  onServer,
  log
}