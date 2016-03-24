//var FetchDispatcher = require('../dispatcher/FetchDispatcher');
//var FetchConstants = require('../constants/FetchConstants');
var APIUtils = require('../utils/APIUtils');

module.exports = {

	createProfile: function(profile) {
//		console.log('CREATE PROFILE: '+JSON.stringify(profile));
		APIUtils.register(profile);

	}

}