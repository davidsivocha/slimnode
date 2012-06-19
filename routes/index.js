var articles = './articles';
var fs = require('fs')
	, markdown = require('markdown').markdown
	, settings = require('../settings');

exports.index = function(req, res){
	fs.readdir(articles, function(err,files){
		if (err){
			res.render('error', { title: 'Error' });
		} else {
			var titles = {};
			files.sort(function(a, b) {
				return fs.statSync(articles + "/" + b).mtime.getTime() - fs.statSync(articles + "/" + a).mtime.getTime();
			});
			for(var i = 0; i < files.length; i++ ){
				var each = files[i];
				var article = articles + '/' + each;
				var data = fs.readFileSync(article, 'utf-8');
				var array = data.toString().split("\n \n");
				var parsed = JSON.parse(array[0]);
				titles[parsed.slug] = parsed.title;
			}
			res.render('index', { title: settings.sitename, titles: titles});
		}
	});
};

exports.about = function(req, res){
	res.render('about', { title: 'About' });
};

exports.article = function(req, res){
	var article = articles + '/' + req.params.article + '.txt'
	fs.readFile(article, 'utf-8', function(err, data){
		if (err){
			res.render('error', { title: 'Error' });
		} else {
			var array = data.toString().split("\n \n");
			var parsed = JSON.parse(array[0]);
			var output = markdown.toHTML(array[1]);
			res.render('article', { title: parsed.title, body: output });
		}
	});
};