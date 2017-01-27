var Router 		= require('express').Router();
var isLoggedIn 	= require('../helpers/is-logged-in');
var F_1270		= require('../models/f-1270');

Router
	.get('/f-1270-calibration', isLoggedIn, function(req,res){
		// console.log('f1267-calibration pasok!');
		res.render('f-1270-calibration');
	});


module.exports = Router;