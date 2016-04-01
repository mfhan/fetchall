var FetchDispatcher = require('../dispatcher/FetchDispatcher');
var FetchConstants = require('../constants/FetchConstants');

module.exports = {

	updateCurrentUser: function(updatedUser){
//		console.log('UPDATE CURRENT USER: '+JSON.stringify(updatedUser));
		FetchDispatcher.dispatch({
			type: FetchConstants.USER_UPDATED,
			currentUser: updatedUser
		});
	},

	updateCurrentOrder: function(updatedOrder){
//		console.log('UPDATE CURRENT ORDER: '+JSON.stringify(updatedOrder));

		FetchDispatcher.dispatch({
			type: FetchConstants.CURRENT_ORDER_UPDATED,
			currentOrder: updatedOrder
		});


	},

	updateSelectedOrder: function(updatedOrder){
	// console.log('UPDATE SELECTED ORDER: '+JSON.stringify(updatedOrder));

		FetchDispatcher.dispatch({
			type: FetchConstants.SELECTED_ORDER_UPDATED,
			selectedOrder: updatedOrder
		});


	}


}