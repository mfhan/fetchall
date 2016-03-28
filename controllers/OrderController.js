var Order = require('../models/Order');


module.exports = {

	get: function(params, isRaw, completion){
		Order.find(params, function(err, orders){
			if (err){
				completion(err, null);
			    return;
			}

			if (isRaw == true){
				completion(null, orders);
				return;
			}

			var list = [];
			for (var i=0; i<orders.length; i++){
				var order = orders[i];
				list.push(order.summary());
			}

			completion(null, list);
		    return;
		});
	},

	getById: function(id, completion){
		Order.findById(id, function(err, order){
			if (err){
				var error = {message:'Order Not Found'};
				completion(error, null);
			    return;
			}

			if (order == null){
				var error = {message:'Order Not Found'};
				completion(error, null);
			    return;
			}

			completion(null, order.summary());
		});
	},

	post: function(params, completion){

		Order.create(params, function(err, order){
			if (err){
				completion(err, null);
			    return;
			}

			var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
			sendgrid.send({
				to:       'dan.kwon234@gmail.com',
				from:     'info@thegridmedia.com',
				subject:  'New Order Notification!',
				text:     JSON.stringify(order.summary())
			}, function(err, json) {
				if (err) { }

			});

			completion(null, order.summary());
		});
	},

	put: function(id, params, completion){

		Order.findByIdAndUpdate(id, params, {new:true}, function(err, order){
			if (err){
				completion(err, null);
			    return;
			}

			if (params['fetcher'] != null){
				var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
				sendgrid.send({
					to:       'dan.kwon234@gmail.com',
					from:     'info@thegridmedia.com',
					subject:  'Your Order Has been Claimed!',
					text:     JSON.stringify(order.summary())
				}, function(err, json) {
					if (err) { }

				});
			}



			completion(null, order.summary());
		});
	}



}