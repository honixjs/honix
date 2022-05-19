const http = require('http');

function onServer(self) {
  var serverSettings = function(req, res){
    res.write(self['write']);
    res.end();
  }
  var server = http.createServer(serverSettings);

  server.listen(self["port"]);
};

module.exports = {
  onServer
}