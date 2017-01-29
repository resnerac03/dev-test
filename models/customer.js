'use strict'
var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
	customer: {type: String},
	location: {type: String}
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;