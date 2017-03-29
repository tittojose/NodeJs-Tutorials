var fs = require('fs')

// read sync
var readMe = fs.readFileSync('readMe.txt', 'utf8');
// console.log(readMe);
//write sync
fs.writeFileSync('writeMe.txt', 'line appended')

// read async
fs.readFile('readMe.txt', 'utf8', function(err,data){
  console.log(data);
  fs.writeFile('writeMe.txt', data);
})
