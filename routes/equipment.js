var Router 		= require('express').Router();
var isLoggedIn 	= require('../helpers/is-logged-in');
var Equipment	= require('../models/equipment');

Router
	.get('/equipment', isLoggedIn, function(req,res){
		res.render('equipment');
	});


module.exports = Router;