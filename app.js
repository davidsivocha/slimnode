var express = require('express');
var fs = require('fs');
var http = require('http');
var router = require('./config/routes');
var settings = require('./config/settings');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var port = process.env.PORT || 8080;
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride());
app.use('/', router);

if(settings.development){
  //runs on port 8080 if development mode
  port = 8080;
} else {
  //runs on port 80 if production mode
  port = 80;
}

http.createServer(app).listen(port);

console.log('Express server listening on port', port);
