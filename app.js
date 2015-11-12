var express = require('express')
  , routes = require('./config/routes')
  , fs = require('fs')
  , settings = require('./config/settings')
  , port = process.env.PORT || 8080
  , http = require('http')
  , app = express();

app.configure(function () {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/page/:page', routes.page);
app.get('/blog', routes.index);
app.get('/blog/:year?/:month?/:day?', routes.archive);
app.get('/blog/:year/:month/:day/:article', routes.article);

if(settings.development){
  //runs on port 8080 if development mode
  port = 8080;
} else {
  //runs on port 80 if production mode
  port = 80;
}

http.createServer(app).listen(port);

console.log('Express server listening on port', port);
