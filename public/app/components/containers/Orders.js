var React = require('react');
var ProfileStore = require('../../stores/ProfileStore');
var OrderStore = require('../../stores/OrderStore');
var FetchServerActions = require('../../actions/FetchServerActions');


var Orders = React.createClass({

	getInitialState: function(){
		return {
			currentUser: ProfileStore.getCurrentUser(),
			orders: OrderStore.getOrders('array')
		}
	},

	componentDidMount: function(){
		ProfileStore.addChangeListener(this.refreshCurrentUser);
		FetchServerActions.getCurrentUser();
	},

	refreshCurrentUser: function(){
		this.setState({
			currentUser: ProfileStore.getCurrentUser()
		});

		console.log('REFRESH: '+JSON.stringify(this.state.currentUser));
		if (this.state.currentUser.id == null)
			return;

		if (this.state.currentUser.type != 'fetcher'){
			alert('You are not authorized to view this page!');
			return;
		}

		
	},

	render: function(){
		return (
			<div className="container">
				<h1>Welcome {this.state.currentUser.firstName}</h1>
				<table className="table">
				  <thead>
					<tr>
					  <th>#</th>
					  <th>Order</th>
					  <th>Adddress</th>
					  <th>Status</th>
					</tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>1</td>
					  <td>Food</td>
					  <td>123 Main Street</td>
					  <td>Pending</td>
					</tr>
				  </tbody>
				</table>
			</div>
		);
	}

});

module.exports = Orders;