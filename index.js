var express = require('express');
var path = require('path');
var fs = require('fs');
var open = require('open');
require('jquery');

var app = express();
var port = 3000;

app.get('/',function(req,res){
  console.log('dfgdf');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/jquery-3.2.1.js',function(req,res){
  console.log('jq');
  res.sendFile(path.join(__dirname, 'jquery-3.2.1.js'));
});


app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
