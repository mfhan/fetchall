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
		if (this.state.currentUser.id == null)
			return;

		if (this.state.orders == null){
			FetchServerActions.fetchOrders({
				customer: this.state.currentUser.id
			});
		}
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

		var orderList = null;
		if (this.state.orders != null){
			orderList = this.state.orders.map(function(order, i){
				return  <tr><td>{i+1}</td><td>{order.order}</td><td>{order.address}</td><td>{order.status}</td></tr>;
			});

		}


		return (
			<div>
		        <section id="content" style={{backgroundImage: 'url("images/account_bkg.jpg")', minHeight:900}}>

		            <div className="content-wrap" style={{padding:0}}>

		                <div className="container clearfix">
							<h1 ><span style={{color:'#fff',textShadow:'1px 1px #000'}}>Welcome {this.state.currentUser.firstName.toUpperCase() }!</span></h1>
							<div className="tabs tabs-bordered clearfix" id="tab-2">

								<ul className="tab-nav clearfix" style={{background:'#fef1df', border:'none'}}>

									<li style ={{border:'none'}}><a href="#tabs-7" style ={{backgroundColor:'#fef1df'}}>Place Order</a></li>
									<li style ={{border:'none'}} className="hidden-phone"><a href="#tabs-8" style ={{backgroundColor:'#fef1df'}}>Your Orders</a></li>
									<li style ={{border:'none'}}><a href="#tabs-6" style ={{backgroundColor:'#fef1df'}}>Account</a></li>
								</ul>

								<div className="tab-container" style={{background:'#fff'}}>

									<div className="tab-content clearfix" id="tabs-6">

										<div className="col_two_third nobottommargin">

											<div className="well well-lg nobottommargin" style={{border:'2px inset red'}}>
												<form id="login-form" name="login-form" className="nobottommargin" action="#" method="post" >

													<h3 style={{color:'red'}}>Manage your Account</h3>

													<div className="col_full">
														<label>First Name:</label>
														<input type="text" style ={{backgroundColor:'#fff', color:'#000'}} onChange={this.updateCurrentUser} id="firstName" name="login-form-username" value={this.state.currentUser.firstName} className="form-control" />
													</div>

													<div className="col_full">
														<label>Last Name:</label>
														<input type="text" style ={{backgroundColor:'#fff', color:'#000'}} onChange={this.updateCurrentUser} id="lastName" name="login-form-username" value={this.state.currentUser.lastName} className="form-control" />
													</div>

													<div className="col_full">
														<label>Password:</label>
														<input type="password" style ={{backgroundColor:'#fff', color:'#000'}} id="login-form-password" name="login-form-password" value={this.state.currentUser.password} className="form-control" />
													</div>

													<div className="col_full nobottommargin">
														<button onClick={this.finalizeChanges} className="button button-3d nomargin" id="login-form-submit" name="login-form-submit" value="update">Update</button>
													</div>

												</form>
											</div>

										</div>

									</div>
									<div className="tab-content clearfix" id="tabs-7" >

										<div className="col_two_third nobottommargin">

											<div className="well well-lg nobottommargin" style={{border:'2px inset red'}}>
												<form id="login-form" name="login-form" className="nobottommargin" action="#" method="post">

													<h3 style={{color:'red'}}>Place Your Order</h3>

													<div className="col_full">
														<label>Order Here:</label>
														<textarea placeholder ="office supplies, food, coffee, store items, etc." onChange={this.updateCurrentOrder} id="order" className="form-control" value={this.state.currentOrder.order}></textarea>
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
										  <thead style={{color:'red'}}>
											<tr>
											  <th>#</th>
											  <th>Order</th>
											  <th>Adddress</th>
											  <th>Status</th>
											</tr>
										  </thead>
										  <tbody style={{color:'#555'}}>
										  	  {orderList}
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