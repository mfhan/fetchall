var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
	firstName: {type:String, trim:true, lowercase:true, default:''},
	lastName: {type:String, trim:true, lowercase:true, default:''},
	email: {type:String, trim:true, lowercase:true, default:''},
	type: {type:String, trim:true, lowercase:true, default:'customer'}, // customer or fetcher
	password: {type:String, default:''},
	timestamp: {type:Date, default: Date.now}
});

ProfileSchema.methods.summary = function() {
	var summary = {
		'firstName':this.firstName,
		'lastName':this.lastName,
		'email':this.email,
		'type':this.type,
		'timestamp':this.timestamp,
		'id':this._id
	};
	
	return summary;
};

module.exports = mongoose.model('ProfileSchema', ProfileSchema);