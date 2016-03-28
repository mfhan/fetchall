var FetchDispatcher = require('../dispatcher/FetchDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var FetchConstants = require('../constants/FetchConstants');


var currentUser = {
	id: null,
	firstName: '',
	lastName: '',
	email: '',
	type: 'customer',
	password: ''
}

var ProfileStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
	    this.emit(FetchConstants.CHANGE_EVENT);
	},

	/** @param {function} callback   */
	addChangeListener: function(callback) {
	    this.on(FetchConstants.CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
	    this.removeListener(FetchConstants.CHANGE_EVENT, callback);
	},

	getCurrentUser: function(){
		return currentUser;
	}

});

ProfileStore.dispatchToken = FetchDispatcher.register(function(action) {

	if (action.type == FetchConstants.USER_UPDATED){
		var updatedUser = action.currentUser;

		var name = updatedUser.name;

		if (name != null){
			var parts = name.split(' ');
			updatedUser['firstName'] = parts[0];
			if (parts.length > 1){
				updatedUser['lastName'] = parts[parts.length-1];
			}
		}

		currentUser = updatedUser;
//		console.log('USER_UPDATED CALLBACK: '+JSON.stringify(currentUser));
      	ProfileStore.emitChange();
	}


});


module.exports = ProfileStore;











