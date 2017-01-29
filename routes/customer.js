var Router 		= require('express').Router();
var isLoggedIn 	= require('../helpers/is-logged-in');
var Customer	= require('../models/customer');

Router
	.get('/customer', isLoggedIn, function(req,res){
		res.render('customer');
	});


module.exports = Router;