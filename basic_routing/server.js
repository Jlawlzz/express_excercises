"use strict";

let express = require('express');
let app = express();

app.get('/', function(req, res){
  console.log("Got a Get request for the homepage");
  res.send('Hello Get');
});

app.post('/', function(req, res){
  console.log('Got a Post request for the homepage');
  res.send('Hello Post');
});

app.delete('/del_user', function(req, res){
  console.log("Got a DELETE request for /del_user");
  res.send('Hello Delete');
});

app.get('list_user', function(req, res){
  console.log("Got a GET request for /list_user");
  rec.send('Page Listing');
});

app.get('/ab*cd', function(req, res){
  console.log("Got a GET request for /ab*cd");
  res.send('Page Pattern Match');
});

var server = app.listen(3000, function(){
});
