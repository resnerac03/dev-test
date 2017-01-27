var Router 		= require('express').Router();
var isLoggedIn 	= require('../helpers/is-logged-in');
var JobRequest	= require('../models/job-request');

Router
	.get('/job-request', isLoggedIn, function(req,res){
		res.render('job-request');
	});


module.exports = Router;