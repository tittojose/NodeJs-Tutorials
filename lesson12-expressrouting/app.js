var express = require('express')

var app = express();

app.listen(3000);

app.get('/',function(req,res){
  res.send('hello');
});

app.get('/contact',function(req,res){
  res.send('contact page');
});


app.get('/profile/:id',function(req,res){
  res.send('you requested profile id : ' + req.params.id);
});
