
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.about = function(req, res){
  res.render('index', { title: 'About' });
};

exports.article = function(req, res){
  res.render('index', { title: 'Article' });
};