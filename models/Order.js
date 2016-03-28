var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	order: {type:String, trim:true, lowercase:true, default:''},
	venue: {type:String, trim:true, lowercase:true, default:''},
	address: {type:String, trim:true, lowercase:true, default:''},
	status: {type:String, trim:true, lowercase:true, default:'pending'},
	fetcher: {type:String, trim:true, lowercase:true, default:''},
	customer: {type:String, trim:true, lowercase:true, default:''},
	cost: {type:Number, default:0},
	timeplaced: {type:Date, default: Date.now},
	timedelivered: {type:Date, default: null},
});

OrderSchema.methods.summary = function() {
	var summary = {
		'order':this.order,
		'venue':this.venue,
		'address':this.address,
		'status':this.status,
		'fetcher':this.fetcher,
		'customer':this.customer,
		'cost':this.cost,
		'timeplaced':this.timeplaced,
		'timedelivered':this.timedelivered,
		'id':this._id
	};
	
	return summary;
};

module.exports = mongoose.model('OrderSchema', OrderSchema);