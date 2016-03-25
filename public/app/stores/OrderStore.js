var FetchDispatcher = require('../dispatcher/FetchDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var FetchConstants = require('../constants/FetchConstants');


var currentOrder = {
	id: null,
	order: '',
	address: '',
	customer: ''
}

var OrderStore = assign({}, EventEmitter.prototype, {
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

	getCurrentOrder: function(){
		return currentOrder;
	}

});

OrderStore.dispatchToken = FetchDispatcher.register(function(action) {

	if (action.type == FetchConstants.CURRENT_ORDER_UPDATED){
		currentOrder = action.currentOrder;
      	OrderStore.emitChange();
	}


});


module.exports = OrderStore;











