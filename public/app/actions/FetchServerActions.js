//var FetchDispatcher = require('../dispatcher/FetchDispatcher');
//var FetchConstants = require('../constants/FetchConstants');
var APIUtils = require('../utils/APIUtils');

module.exports = {

	createProfile: function(profile) {
		APIUtils.register(profile);
	},

	getCurrentUser: function(){
		APIUtils.checkCurrentUser();
	},

	updateProfile: function(profile){
//		console.log('UPDATE PROFILE: '+JSON.stringify(profile));
		APIUtils.updateProfile(profile);
	}


}