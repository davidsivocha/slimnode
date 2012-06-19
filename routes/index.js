var articles = './articles';
var fs = require('fs');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
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