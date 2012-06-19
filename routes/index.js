var articles = './articles';
var fs = require('fs');

exports.index = function(req, res){
	fs.readdir(articles, function(err,files){
		if (err){
			res.render('index', { title: 'Error' });
		} else {
			var titles = [];
			files.sort(function(a, b) {
				return fs.statSync(articles + "/" + b).mtime.getTime() - fs.statSync(articles + "/" + a).mtime.getTime();
			});
			for(var i = 0; i < files.length; i++ ){
				var each = files[i];
				var article = articles + '/' + each;
				var data = fs.readFileSync(article, 'utf-8');
				var array = data.toString().split("\n \n");
				var parsed = JSON.parse(array[0]);
				titles.push(parsed.title);
				console.log(titles);
			}
			res.render('index', { title: titles });
		}
	});
};

exports.about = function(req, res){
  res.render('index', { title: 'About' });
};

exports.article = function(req, res){
  var article = articles + '/' + req.params.article + '.txt'
  fs.readFile(article, 'utf-8', function(err, data){
  	if (err){
  		res.render('index', { title: 'Error' });
  	} else {
  		var array = data.toString().split("\n \n");
  		var parsed = JSON.parse(array[0]);
  		res.render('index', { title: parsed.title });
  	}
  });
  
};