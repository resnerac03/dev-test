var Router 		= require('express').Router();
var isLoggedIn 	= require('../helpers/is-logged-in');
var F_1267		= require('../models/f-1267');

Router
	.get('/f-1267-calibration', isLoggedIn, function(req,res){
		console.log('f1267-calibration pasok!');
		res.render('f-1267-calibration');
	});


module.exports = Router;