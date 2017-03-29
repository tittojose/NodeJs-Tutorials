

var express = require('express')

var app = express();

app.listen(3000);

app.get('/',function(req,res){
  res.send('hello');
});

app.get('/contact',function(req,res){
  res.send('contact page');
});
