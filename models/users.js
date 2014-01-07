(function(){
	var mongoose, schema;
	mongoose = require('mongoose');

	schema = mongoose.Schema({
		account: String,
		name: String,
		password: String
	});

	schema.methods.login = function (cb){
		return cb();
	};

	schema.methods.logout = function (cb){
		return cb();
	};

	schema.methods.register = function (cb){
		return cb();
	};

	schema.methods.update = function (cb){
		return cb();
	};

	module.exports = schema;
	
}).call(this);