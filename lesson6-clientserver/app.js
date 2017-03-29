var http = require('http')

var httpReqListener = function(req,res){
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end('Hey ninjas');
};

var server = http.createServer(httpReqListener);

server.listen(3000,'127.0.0.1');
