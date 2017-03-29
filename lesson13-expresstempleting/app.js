var express = require('express')
var app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/profile/:id',function(req,res){
  // res.send('you requested profile id : ' + req.params.id);
  var details = {
    age : 24,
    job : 'sw',
    hobbies : ['learning', 'coding', 'creating']
  };
  res.render('profile',{name : req.params.id, details : details});
});
