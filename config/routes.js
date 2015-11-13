var express = require('express');
var routes = require('./blog/index');
var router = express.Router();

router.get('/', routes.index);
router.get('/page/:page', routes.page);
router.get('/blog', routes.index);
router.get('/blog/:year?/:month?/:day?', routes.archive);
router.get('/blog/:year/:month/:day/:article', routes.article);

module.exports = router;
