var Router 		= require('express').Router();
var isLoggedIn 	= require('../helpers/is-logged-in');
var User 		= require('../models/user');


// Register User

Router
	.get('/register',isLoggedIn, function(req,res){
		res.render('register');
	})

	.post('/register',isLoggedIn, function(req, res){
		var name = req.body.name;
		var email = req.body.email;
		var username = req.body.username;
		var password = req.body.password;
		var password2 = req.body.password2;

		// Validation
		req.checkBody('name', 'Name is required').notEmpty();
		req.checkBody('email', 'Email is required').notEmpty();
		req.checkBody('email', 'Email is not valid').isEmail();
		req.checkBody('username', 'Username is required').notEmpty();
		req.checkBody('password', 'Password is required').notEmpty();
		req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

		var errors = req.validationErrors();

		if(errors){
			res.render('register',{
				errors:errors
			});
		} else {
			var newUser = new User({
				name: name,
				email:email,
				username: username,
				password: password
			});

			User.createUser(newUser, function(err, user){
				if(err) throw err;
				console.log(user);
			});

			req.flash('success_msg', 'You are registered and can now login');

			res.redirect('/login');
		}
	})

module.exports = Router;