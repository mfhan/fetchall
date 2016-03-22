var FetchDispatcher = require('../dispatcher/FetchDispatcher');

module.exports = {

	updateCurrentUser: function(updatedUser){
	    FetchDispatcher.dispatch({
		    type: 'CURRENT_USER_UPDATED',
		    updatedUser: updatedUser
	    });

	}

}