var http = require('http')
var fs = require('fs')



var httpReqListener = function(req,res){
  res.writeHead(200, {'Content-Type' : 'application/json'});
  var myObj = {
    name: 'dave',
    job : 'sw',
    age : 29
  };

  res.end(JSON.stringify(myObj));

};

var server = http.createServer(httpReqListener);

server.listen(3000,'127.0.0.1');
