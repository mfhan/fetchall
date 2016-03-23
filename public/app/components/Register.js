var React = require('react');	

var Register = React.createClass({

	getInitialState: function(){
		return {
			visitor: {
				id: null,
				name: '',
				email: '',
				password: ''
			}
		}
	},

	updateVisitor: function(event){
		console.log(event.target.value);

	},


	render: function(){


		return(

			<form role="form" className="landing-wide-form landing-form-overlay dark nobottommargin clearfix" style={{bottom:36}}>
                <div className="heading-block nobottommargin nobottomborder">
                    <h2>Signup for FREE</h2>
                    <span>Get 30 Days Unlimited Access</span>
                </div>
                <div className="line" style={{margin: '20px 0 30px'}}></div>
                <div className="col_full">
                    <input onChange={this.updateVisitor} type="text" className="form-control input-lg not-dark" placeholder="Your Name" />
                </div>
                <div className="col_full">
                    <input onChange={this.updateVisitor} type="email" className="form-control input-lg not-dark" placeholder="Your Email" />
                </div>
                <div className="col_full">
                    <input onChange={this.updateVisitor} type="password" className="form-control input-lg not-dark" placeholder="Choose Password" />
                </div>
                <div className="col_full nobottommargin">
                    <button className="btn btn-lg btn-success btn-block nomargin" value="submit">START FREE TRIAL</button>
                </div>
            </form>

		)
	}
});
module.exports = Register;