'use strict'
var mongoose = require('mongoose');

var f1267_Schema = mongoose.Schema({
	no: {type: String},
	name: {type: String},
	description: {type: String},
	quantity: {type: String}
});

var F_1267 = mongoose.model('F_1267', f1267_Schema);

module.exports = F_1267;