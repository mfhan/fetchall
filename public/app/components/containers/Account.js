var React = require('react');
var ProfileStore = require('../../stores/ProfileStore');
var OrderStore = require('../../stores/OrderStore');
var FetchServerActions = require('../../actions/FetchServerActions');
var FetchClientActions = require('../../actions/FetchClientActions');


var Account = React.createClass({
	getInitialState: function(){
		return {
			currentOrder: OrderStore.getCurrentOrder(),
			currentUser: ProfileStore.getCurrentUser(),
			orders: OrderStore.getOrders('array'),
			isUpdating: false,
			isOrdering: false
		}
	},

	componentDidMount: function(){
		ProfileStore.addChangeListener(this.refresh);
		OrderStore.addChangeListener(this.refresh);
		FetchServerActions.getCurrentUser();
	},

	refresh: function(){
		if (this.state.isUpdating == true){
			alert('Your changes have been saved!');
		}

		if (this.state.isOrdering == true){
			alert('Thank For Ordering! It\'s on the way!');
		}

		this.setState({
			currentUser: ProfileStore.getCurrentUser(),
			currentOrder: OrderStore.getCurrentOrder(),
			orders: OrderStore.getOrders('array'),
			isUpdating: false,
			isOrdering: false
		});

		console.log('REFRESH: '+JSON.stringify(this.state.currentUser));
	},

	updateCurrentUser: function(event){
		var updatedCurrentUser = {
			id: this.state.currentUser.id,
			firstName: this.state.currentUser.firstName,
			lastName: this.state.currentUser.lastName,
			email: this.state.currentUser.email
		}

		updatedCurrentUser[event.target.id] = event.target.value;
		FetchClientActions.updateCurrentUser(updatedCurrentUser);
	},

	finalizeChanges: function(event){
		event.preventDefault();
//		console.log('Finalize Changes: '+JSON.stringify(this.state.currentUser));

		this.setState({
			isUpdating: true
		});

		FetchServerActions.updateProfile(this.state.currentUser);
	},

	updateCurrentOrder: function(event){
		event.preventDefault();
		var updatedCurrentOrder = {
			id: this.state.currentOrder.id,
			order: this.state.currentOrder.order,
			address: this.state.currentOrder.address,
			customer: this.state.currentUser.id
		}

		updatedCurrentOrder[event.target.id] = event.target.value;
		FetchClientActions.updateCurrentOrder(updatedCurrentOrder);
	},

	submitOrder: function(event){
		event.preventDefault();
		this.setState({
			isOrdering: true
		});

		FetchServerActions.submitOrder(this.state.currentOrder);
	},

	render: function(){
		return (
			<div>
		        <section id="content" style={{background: '#f9f9f9'}}>

		            <div className="content-wrap">

		                <div className="container clearfix">
							<h4>Welcome {this.state.currentUser.firstName.toUpperCase() }!</h4>
							<div className="tabs tabs-bordered clearfix" id="tab-2">

								<ul className="tab-nav clearfix">
									<li><a href="#tabs-6">Account</a></li>
									<li><a href="#tabs-7">Place Order</a></li>
									<li className="hidden-phone">
										<a href="#tabs-8">Your Orders</a>
									</li>
								</ul>

								<div className="tab-container" style={{background:'#fff'}}>

									<div className="tab-content clearfix" id="tabs-6">

										<div className="col_two_third nobottommargin">

											<div className="well well-lg nobottommargin">
												<form id="login-form" name="login-form" className="nobottommargin" action="#" method="post">

													<h3>Manage your Account</h3>

													<div className="col_full">
														<label>First Name:</label>
														<input type="text" onChange={this.updateCurrentUser} id="firstName" name="login-form-username" value={this.state.currentUser.firstName} className="form-control" />
													</div>

													<div className="col_full">
														<label>Last Name:</label>
														<input type="text" onChange={this.updateCurrentUser} id="lastName" name="login-form-username" value={this.state.currentUser.lastName} className="form-control" />
													</div>

													<div className="col_full">
														<label>Password:</label>
														<input type="password" id="login-form-password" name="login-form-password" value={this.state.currentUser.password} className="form-control" />
													</div>

													<div className="col_full nobottommargin">
														<button onClick={this.finalizeChanges} className="button button-3d nomargin" id="login-form-submit" name="login-form-submit" value="update">Update</button>
													</div>

												</form>
											</div>

										</div>

									</div>
									<div className="tab-content clearfix" id="tabs-7">

										<div className="col_two_third nobottommargin">

											<div className="well well-lg nobottommargin">
												<form id="login-form" name="login-form" className="nobottommargin" action="#" method="post">

													<h3>Place Your Order</h3>

													<div className="col_full">
														<label>Order:</label>
														<textarea onChange={this.updateCurrentOrder} id="order" className="form-control" value={this.state.currentOrder.order}></textarea>
													</div>

													<div className="col_full">
														<label>Adddress:</label>
														<input onChange={this.updateCurrentOrder} value={this.state.currentOrder.address} type="text" id="address" name="login-form-username" className="form-control" />
													</div>

													<div className="col_full nobottommargin">
														<button onClick={this.submitOrder} className="button button-3d nomargin" id="login-form-submit" name="login-form-submit" value="update">Submit Order</button>
													</div>

												</form>
											</div>

										</div>

									</div>
									<div className="tab-content clearfix" id="tabs-8">

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
											  <td>Mark</td>
											  <td>Otto</td>
											  <td>@mdo</td>
											</tr>
											<tr>
											  <td>2</td>
											  <td>Jacob</td>
											  <td>Thornton</td>
											  <td>@fat</td>
											</tr>
											<tr>
											  <td>3</td>
											  <td>Larry</td>
											  <td>the Bird</td>
											  <td>@twitter</td>
											</tr>
										  </tbody>
										</table>

									</div>

								</div>

							</div>


		                </div>
		            </div>
		        </section> 

			</div>
		);
	}

});

module.exports = Account;