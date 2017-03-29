var fs = require('fs')

// fs.mkdirSync('stuff');

fs.rmdirSync('stuff');

// async

fs.mkdirSync('stuff', function(){
  console.log("foler is created");
});
