var express = require('express');
var router = express.Router();

$(document).ready(function() {
	$('.parallax').parallax();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { robots:[], title: '' });
});

module.exports = router;
