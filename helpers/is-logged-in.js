'use strict'

module.exports = function (req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.render('login');
		res.redirect('/users/login');
	}
}