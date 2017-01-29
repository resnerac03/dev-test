'use strict'
var mongoose = require('mongoose');

var F_1270_Schema = mongoose.Schema({
	name: {type: String},
	type: {type: String},
	model: {type: String},
	origin: {type: String},
	cert_num: {type: String},
	serial_num: {type: String},
	specification: {type: String},
	measurement: {
		equipment: {type: String},
		parameter: {type: String},
		applied_value: {type: String},
		measured_value: {type: String},
		error: {type: String},
		tolerance: {type: String},
		result: {type:String}
	},
	remark_measurement: {type: String},
	reference: {
		description: {type: String},
		serial: {type: String},
		cert: {type: String}
	},
	remark_reference: {type: String},
	calibrated_by: {type: String},
	signature_calibrated: {type: String},
	verified_by: {type: String},
	signature_verified: {type: String},
	next_calibration_date: {type: String}
});

var F_1270 = mongoose.model('F_1270', F_1270_Schema);

module.exports = F_1270;