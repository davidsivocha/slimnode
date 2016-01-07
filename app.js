var express         = require('express') ,
    http            = require('http'),
    router          = require('./config/routes'),
    settings        = require('./config/settings'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    morgan          = require('morgan'),
    app             = express(),
    approot         = __dirname;

console.log(approot);

app.set('views', approot + '/views');
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride());
app.use('/', router);

http.createServer(app).listen(settings.port);

console.log('Express server listening on port', settings.port);
console.log(settings.development ? '**Dev Build**' : '**Production Build**');
