'use strict'
var mongoose = require('mongoose');

var jobRequestSchema = mongoose.Schema({
	jr_num: {type: String},
	date: {type: String},
	department: {type: String},
	unit_num: {type: String},
	unit_description: {type: String},
	cost_code: {type: String},
	date_in: {type: String},
	date_out: {type: String},
	defect_description: {type: String},
	job_card_num: {type: String},
	job_assigned_to: {type: String},
	detail_repair_performed: {type: String},
	raised_signature: {type: String},
	raised_name: {type: String},
	completed_signature: {type: String},
	completed_name: {type: String},
	unit_recieved_by: {type: String},
	unit_recieved_name: {type: String}
});

var JobRequest = mongoose.model('JobRequest', jobRequestSchema);

module.exports = JobRequest;