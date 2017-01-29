'use strict'
var mongoose = require('mongoose');

var F_1270_Schema = mongoose.Schema({
	no: {type: String},
	name: {type: String},
	description: {type: String},
	quantity: {type: String}
});

var F_1270 = mongoose.model('F_1270', F_1270_Schema);

module.exports = F_1270;