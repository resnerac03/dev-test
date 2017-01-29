'use strict'
var mongoose = require('mongoose');

var jobRequestSchema = mongoose.Schema({
	no: {type: String},
	name: {type: String},
	description: {type: String},
	quantity: {type: String}
});

var JobRequest = mongoose.model('JobRequest', jobRequestSchema);

module.exports = JobRequest;