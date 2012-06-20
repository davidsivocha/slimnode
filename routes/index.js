var articles = './articles';
var static = './static';
var fs = require('fs')
	, markdown = require('markdown').markdown
	, settings = require('../settings');

exports.index = function(req, res){
	fs.readdir(articles, function(err,files){
		if (err){
			res.render('error', { title: 'Unable to read directory!', settings:settings});
		} else {
			var titles = {};
			files.sort(function(a, b) {
				return fs.statSync(articles + "/" + b).mtime.getTime() - fs.statSync(articles + "/" + a).mtime.getTime();
			});
			for(var i = 0; i < files.length; i++ ){
				var each = files[i];
				var article = articles + '/' + each;
				var data = fs.readFileSync(article, 'utf-8');
				var array = data.toString().split("\n\n");
				var parsed = JSON.parse(array[0]);
				titles[parsed.slug] = parsed.Title;
			}
			res.render('index', { title: 'Home', titles: titles, settings: settings});
		}
	});
};

exports.about = function(req, res){
	var page = static + '/about.txt'
	fs.readFile(page, 'utf-8', function(err, data){
		if (err){
			res.render('error', { title: '404', settings:settings});
		} else {
			var doc = data.toString();
			var output = markdown.toHTML(doc);
			res.render('page', {title:'About', body: output, settings: settings});
		}
	});
};

exports.article = function(req, res){
	var article = articles + '/' + req.params.article + '.txt'
	fs.readFile(article, 'utf-8', function(err, data){
		if (err){
			res.render('error', { title: '404', settings:settings});
		} else {
			var array = data.toString().split("\n\n");
			var parsed = JSON.parse(array[0]);
			var output = markdown.toHTML(array[1]);
			res.render('article', { title: parsed.Title, body: output, settings: settings, meta:parsed});
		}
	});
};