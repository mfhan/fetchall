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
		APIUtils.updateProfile(profile);
	},

	submitOrder: function(order){
		// console.log('FETCH SERVER ACTIONS - SUBMIT ORDER: '+JSON.stringify(order));
		APIUtils.createOrder(order);

	}


}