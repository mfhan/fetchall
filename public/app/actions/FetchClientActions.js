var FetchDispatcher = require('../dispatcher/FetchDispatcher');
var FetchConstants = require('../constants/FetchConstants');

module.exports = {

	updateCurrentUser: function(updatedUser){
//		console.log('UPDATE CURRENT USER: '+JSON.stringify(updatedUser));
		FetchDispatcher.dispatch({
			type: FetchConstants.USER_UPDATED,
			currentUser: updatedUser
		});


	}

}