var http = require('http')
var fs = require('fs')



var httpReqListener = function(req,res){
  res.writeHead(200, {'Content-Type' : 'text/html'});

  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(res);
};

var server = http.createServer(httpReqListener);

server.listen(3000,'127.0.0.1');
