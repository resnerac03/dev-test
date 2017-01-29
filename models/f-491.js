'use strict'
var mongoose = require('mongoose');

var F_491_Schema = mongoose.Schema({
	no: {type: String},
	name: {type: String},
	description: {type: String},
	quantity: {type: String}
});

var F_491 = mongoose.model('F_491', F_491_Schema);

module.exports = F_491;