var express = require('express');
var redis = require('redis');
var redisClient = redis.createClient();
var router = express.Router();

//GET robots listing
router.get('/', function(req, res) {
	redisClient.smembers('robots', function(err, robots) {
		res.locals.robots = robots ? robots : [];
		res.render('robots');
	});
});
//POST add robot
router.post('/', function(req, res, next) {
	redisClient.sadd('robots', req.body.name);
	res.redirect('/robots');
});
//DELETE a robot 
router.get('/delete/:name', function(req, res, next) {
  redisClient.srem("robots", req.params.name);
  res.redirect('/robots');
});

module.exports = router;
