var Router = require('express').Router();
var isLoggedIn = require('../helpers/is-logged-in');

// Get Homepage

Router
	.get('/', isLoggedIn, function(req, res){
		res.render('index');
	})
	
	

module.exports = Router;