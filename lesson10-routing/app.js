var http = require('http')
var fs = require('fs')



var httpReqListener = function(req,res){
  console.log(req.url);
  var url = req.url;
  if(url === '/home' || url === '/'){
   //home
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname+'/index.html').pipe(res);
  }else{
    // page not found
      res.writeHead(404, {'Content-Type' : 'text/html'});
      fs.createReadStream(__dirname+'/pagenotfound.html').pipe(res);
  }
};

var server = http.createServer(httpReqListener);

server.listen(3000,'127.0.0.1');
