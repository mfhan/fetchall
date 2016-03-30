var React = require('react');
var ProfileStore = require('../../stores/ProfileStore');
var FetchClientActions = require('../../actions/FetchClientActions');
var FetchServerActions = require('../../actions/FetchServerActions');

var Login = React.createClass({

	getInitialState: function(){
		return {
			currentUser: ProfileStore.getCurrentUser()
		}
	},

	componentDidMount: function(){
		ProfileStore.addChangeListener(this.refresh);

	},

	refresh: function(){
		this.setState({
			currentUser: ProfileStore.getCurrentUser()
		});

		if (this.state.currentUser.id != null)
			window.location.href = '/account';

	},

	updateCurrentUser: function(event){
		event.preventDefault();
		var updatedUser = {
			email: this.state.currentUser.email,
			password: this.state.currentUser.password
		}

		updatedUser[event.target.id] = event.target.value;
		FetchClientActions.updateCurrentUser(updatedUser);
	},

	login: function(event){
		event.preventDefault();
		console.log('LOGIN: '+JSON.stringify(this.state.currentUser));
		FetchServerActions.login(this.state.currentUser);

	},

	render: function(){
		return (
			<div>

				<section id="content">
					<div className="content-wrap nopadding">
						<div className="section nopadding nomargin" style={{width:100+'%', height:100+'%', position:'absolute', left:0, top:0, background:'url("/images/loginbackgroundlogo.jpg")'}}></div>
						<div className="section nobg full-screen nopadding nomargin">
							<div className="container vertical-middle divcenter clearfix">

								<div className="row center">
									<a href="index.html">
									<br />
										<img src="email/logo.png" alt="Fetch Logo" />
									</a>
								</div>
								<br />
				

								<div className="panel panel-default divcenter noradius noborder" style={{maxWidth: 400, background: '#F9F9F9'}}>
									<div className="row center" style={{padding:40}}>
										<form id="login-form" name="login-form" className="nobottommargin" action="#" method="post">
											<h3>Login to Account</h3>

											<div className="col_full nobottommargin center">
												<label for="login-form-username">Email:</label>
												<input onChange={this.updateCurrentUser} type="text" id="email" name="login-form-username" value={this.state.currentUser.email} className="form-control not-dark" />
											</div>
											<br />
											<div className="col_full nobottommargin center">
												<label for="login-form-password">Password:</label>
												<input onChange={this.updateCurrentUser} type="password" id="password" name="login-form-password" value={this.state.currentUser.password} className="form-control not-dark" />
											</div>
											<br />
											<div className="col_full nobottommargin center">
												<button onClick={this.login} className="button button-3d button-red nomargin" id="login-form-submit" name="login-form-submit" value="login">Login</button>
											</div>
										</form>


									</div>
								</div>

								<div className="row center dark" style={{marginBottom: 44}}>
									<small>Copyrights &copy; All Rights Reserved by FETCH Inc.</small>
								</div>

							</div>
						</div>

					</div>

				</section>			
			</div>
		);
	}

});

module.exports = Login;