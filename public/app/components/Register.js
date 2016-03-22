var React = require('react');
var ProfileStore = require('../stores/ProfileStore');
var FetchClientActions = require('../actions/FetchClientActions');


var Register = React.createClass({

	getInitialState: function(){
		return {
			visitor: ProfileStore.getCurrentUser()
		}
	},

	componentDidMount: function(){
		ProfileStore.addChangeListener(this.refreshData);

	},

	refreshData: function(){
		console.log('refreshData');
		this.setState({
			visitor: ProfileStore.getCurrentUser()
		});

	},

	updateVisitor: function(event){
		var updatedVisitor = {
			email: this.state.visitor.email,
			password: this.state.visitor.password,
			id: this.state.visitor.id
		};

		updatedVisitor[event.target.id] = event.target.value;

		// create action, send to Profile Store, then broadcast change notification:
		FetchClientActions.updateCurrentUser(updatedVisitor);

	},

	register: function(){
		if (this.state.visitor.email.length == 0){
			alert('Please Enter your Email.');
			return;
		}

		if (this.state.visitor.email.indexOf('@') == -1){
			alert('Please Enter a Valid Email.');
			return;

		}

		if (this.state.visitor.password.length == 0){
			alert('Please Enter your Password.');
			return;
		}

		console.log('REGISTER: '+JSON.stringify(this.state.visitor));

	},

	render: function(){
		return (
            <div className="form" style={{background:'rgba(0,0,0,0.7)', padding:24}}>
                <h4 style={{color:'#fff'}}>Sign Up</h4>
                <hr />
                <input onChange={this.updateVisitor} id="email" style={{width:90+'%'}} type="text" placeholder="Email" /><br />
                <input onChange={this.updateVisitor} id="password" style={{width:90+'%'}} type="password" placeholder="Password" /><br />
                <br />
                <button onClick={this.register} className="btn btn-success" type="submit" value="sign up">Join</button>
            </div>
			
		);
	}

});

module.exports = Register;