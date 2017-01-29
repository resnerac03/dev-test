'use strict'
var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
	no: {type: String},
	name: {type: String},
	description: {type: String},
	quantity: {type: String}
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;