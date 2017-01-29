var Router 		= require('express').Router();
var isLoggedIn 	= require('../helpers/is-logged-in');
var F_491		= require('../models/f-491');

Router
	.get('/f-491-calibration', isLoggedIn, function(req,res){
		// console.log('f1267-calibration pasok!');
		res.render('f-491-calibration');
	});


module.exports = Router;