"use strict";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/home', function(req, res){
  res.sendFile( __dirname + "/views/" + "index.html");
});

app.post('/process_post', function(req, res){
  let response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  console.log(response)
  res.end(JSON.stringify(response));
});

let server = app.listen(3000, function(){
});