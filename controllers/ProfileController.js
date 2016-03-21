var Profile = require('../models/Profile');
var bcrypt = require('bcrypt');

module.exports = {

	get: function(params, isRaw, completion){
		Profile.find(params, function(err, profiles){
			if (err){
				completion(err, null);
			    return;
			}

			if (isRaw == true){
				completion(null, profiles);
				return;
			}

			var list = [];
			for (var i=0; i<profiles.length; i++){
				var profile = profiles[i];
				list.push(profile.summary());
			}

			completion(null, list);
		    return;
		});
	},

	getById: function(id, completion){
		Profile.findById(id, function(err, profile){
			if (err){
				var error = {message:'Profile Not Found'};
				completion(error, null);
			    return;
			}

			if (profile == null){
				var error = {message:'Profile Not Found'};
				completion(error, null);
			    return;
			}

			completion(null, profile.summary());
		});
	},

	post: function(params, completion){
		// Hash the password:
		var hashedPassword = bcrypt.hashSync(params['password'], 10); // w3$rpfjaqpw3fr2134faw
		params['password'] = hashedPassword;

		Profile.create(params, function(err, profile){
			if (err){
				completion(err, null);
			    return;
			}

			completion(null, profile.summary());
		});
	}



}