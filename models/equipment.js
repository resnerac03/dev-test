'use strict'
var mongoose = require('mongoose');

var equipmentSchema = mongoose.Schema({
	no: {type: String},
	name: {type: String},
	description: {type: String},
	quantity: {type: String}
});

var Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;