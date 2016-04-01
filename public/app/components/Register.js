var React = require('react');
var FetchClientActions = require('../actions/FetchClientActions');
var FetchServerActions = require('../actions/FetchServerActions');
var ProfileStore = require('../stores/ProfileStore');

var Register = React.createClass({

	getInitialState: function(){
		return {
			visitor: ProfileStore.getCurrentUser()
		}
	},

	componentDidMount: function(){
		ProfileStore.addChangeListener(this.refresh);
	},

	refresh: function(){
		this.setState({
			visitor: ProfileStore.getCurrentUser()
		});

//		console.log('REFRESH: '+JSON.stringify(this.state.visitor));
		if (this.state.visitor.id == null)
			return;

		// user just registered, redirect to account page:
		window.location.href = '/account';
	},


	updateVisitor: function(event){
		var updatedVisitor = {
			id: this.state.visitor.id,
			firstName: this.state.visitor.firstName,
			lastName: this.state.visitor.lastName,
			type: this.state.visitor.type,
			email: this.state.visitor.email,
			password: this.state.visitor.password
		}

		updatedVisitor[event.target.id] = event.target.value;
		console.log('UPDATE VISITOR: '+JSON.stringify(updatedVisitor));
		FetchClientActions.updateCurrentUser(updatedVisitor);
	},

	register: function(event){
		console.log('Register: ' + JSON.stringify(this.state.visitor));
		event.preventDefault();
		if (this.state.visitor.name == null){
			alert('Please Enter Your Name.');
			return;
		}

		if (this.state.visitor.name.length == 0){
			alert('Please Enter Your Name.');
			return;
		}

		if (this.state.visitor.email.length == 0){
			alert('Please Enter Your Email.');
			return;
		}

		if (this.state.visitor.password.length == 0){
			alert('Please Enter Your Password.');
			return;
		}

		FetchServerActions.createProfile(this.state.visitor);
	},

	render: function(){
		return(
			<form role="form" className="landing-wide-form landing-form-overlay dark nobottommargin clearfix"  style={{top:4, opacity:0.9, margin:30, padding:20}}>
                <div className="heading-block nobottommargin nobottomborder">
                    <h2>Sign Up for FREE</h2>
                    <span>First Order Is on Us!</span>
                </div>
                <div className="line" style={{margin: '20px 0 30px'}}></div>
                <div className="col_full">
                    <input onChange={this.updateVisitor} id="firstName" type="text" className="form-control input-lg not-dark" placeholder="Your First Name" />
                </div>
                <div className="col_full">
                    <input onChange={this.updateVisitor} id="email" type="email" className="form-control input-lg not-dark" placeholder="Your Email" />
                </div>
                <div className="col_full">
                    <input onChange={this.updateVisitor} id="password" type="password" className="form-control input-lg not-dark" placeholder="Choose Password" />
                </div>
                <div className="col_full">
                    <select onChange={this.updateVisitor} id="type" className="form-control" style={{background:'#fff'}}>
                    	<option value="customer">Customer</option>
                    	<option value="fetcher">Fetcher</option>
                    </select>
                </div>
                <div className="col_full nobottommargin">
                    <button onClick={this.register} className="btn btn-lg btn-success btn-block nomargin"  style={{background:'#e6b800'}}  value="submit">START FREE TRIAL</button>
                </div>
                <div className="col_full nobottommargin" style={{textAlign:'center', marginTop:24}}>
                    <a  href="/login"><span style={{fontSize:16, color:'#e6b800'}} >LOG IN</span></a>
                </div>
            </form>

		)
	}
});
module.exports = Register;