var express = require('express')
  , fs = require('fs')
  , http = require('http')
  , router = require('./config/routes')
  , settings = require('./config/settings')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
  , port = process.env.PORT || 8080
  , app = express();

app.configure(function () {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.static(__dirname + '/public'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(express.methodOverride());
  app.use('/', router);
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

if(settings.development){
  //runs on port 8080 if development mode
  port = 8080;
} else {
  //runs on port 80 if production mode
  port = 80;
}

http.createServer(app).listen(port);

console.log('Express server listening on port', port);
