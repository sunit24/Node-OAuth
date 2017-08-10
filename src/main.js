var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var app = express();

// database connection
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/mydb');

// some environment variables
app.set('port', process.env.PORT || 3000);

// dynamically include routes (Controller)
fs.readdirSync('./src/controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      var route = require('./controllers/' + file);
      route.controller(app);
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
