'use strict'
var mongoose = require('mongoose');

var inventorySchema = mongoose.Schema({
	no: {type: String},
	name: {type: String},
	description: {type: String},
	quantity: {type: String}
});

var Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;