var React = require('react');
var ProfileStore = require('../../stores/ProfileStore');
var FetchServerActions = require('../../actions/FetchServerActions');
var FetchClientActions = require('../../actions/FetchClientActions');


var Account = React.createClass({
	getInitialState: function(){
		return {
			currentUser: ProfileStore.getCurrentUser(),
			isUpdating: false
		}
	},

	componentDidMount: function(){
		ProfileStore.addChangeListener(this.refresh);
		FetchServerActions.getCurrentUser();
	},

	refresh: function(){
		if (this.state.isUpdating == true){
			alert('Your changes have been saved!');
		}

		this.setState({
			currentUser: ProfileStore.getCurrentUser(),
			isUpdating: false
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
										<a href="#tabs-8">Order History</a>
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
														<textarea className="form-control"></textarea>
													</div>

													<div className="col_full">
														<label>Adddress:</label>
														<input type="text" id="lastName" name="login-form-username" className="form-control" />
													</div>

													<div className="col_full nobottommargin">
														<button className="button button-3d nomargin" id="login-form-submit" name="login-form-submit" value="update">Submit Order</button>
													</div>

												</form>
											</div>

										</div>

									</div>
									<div className="tab-content clearfix" id="tabs-8">
										Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.
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