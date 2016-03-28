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
		OrderStore.addChangeListener(this.refreshOrders);
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

		FetchServerActions.fetchOrders();
	},

	refreshOrders: function(){
		this.setState({
			orders: OrderStore.getOrders('array')
		});
	},



	render: function(){
		var orderList = null;
		if (this.state.orders != null){
			orderList = this.state.orders.map(function(order, i){
				return  <tr><td>{i+1}</td><td>{order.order}</td><td>{order.address}</td><td>{order.status}</td></tr>;
			});

		}

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
				  	{orderList}
				  </tbody>
				</table>
			</div>
		);
	}

});

module.exports = Orders;