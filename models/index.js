(function (){
	var db, handler, mongoose, onConnect, onDisconnect, options, uri;

	mongoose = require('mongoose');

	uri = 'mongodb://127.0.0.1/moving';

	options = {};

	handler = null;

	onConnect = function() {
		return console.log('Connected to Mongodb');
	};

	module.exports = db = function() {
		return handler = mongoose.connect(uri, options, onConnect);
	};

	module.exports.close = function() {
		return handler.disconnect(onDisconnect);
	};

	module.exports.users = mongoose.model('users', require('./users'));
	
}).call(this);