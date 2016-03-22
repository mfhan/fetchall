var React = require('react');
var ReactDOM = require('react-dom');
var Nav = require('./components/Nav');
var Footer = require('./components/Footer');
var Register = require('./components/Register');

var App = React.createClass({

	render: function(){

		return (
			<div>
				<Nav />
			    <div id="coming_soon">
			        <div className="head">
			            <div className="container">
			                <div className="span4 text">
				                <Register />
			                </div>

			                <div className="span6 text" style={{textAlign:'right'}}>
			                    <h4>What You Want<br />When You Want It</h4>
			                    <p>
			                        We are currently working on an awesome new site. <span>STAY TUNED!</span>
			                    </p>
			                </div>
			            </div>
			        </div>


			        <div className="social" style={{paddingTop:64}}>
			            <div className="container">
			                    <p>Follow us</p>
			                    <a href="#" className="facebook">
			                        <span className="icons ico1"></span>
			                        <span className="iconsh ico1h"></span>
			                    </a>
			                    <a href="#" className="twitter">
			                        <span className="icons ico2"></span>
			                        <span className="iconsh ico2h"></span>
			                    </a>
			                    <a href="#" className="gplus">
			                        <span className="icons ico3"></span>
			                        <span className="iconsh ico3h"></span>
			                    </a>
			                    <a href="#" className="flickr">
			                        <span className="icons ico4"></span>
			                        <span className="iconsh ico4h"></span>
			                    </a>
			                    <a href="#" className="pinterest">
			                        <span className="icons ico5"></span>
			                        <span className="iconsh ico5h"></span>
			                    </a>
			                    <a href="#" className="dribble">
			                        <span className="icons ico6"></span>
			                        <span className="iconsh ico6h"></span>
			                    </a>
			                    <a href="#" className="behance">
			                        <span className="icons ico7"></span>
			                        <span className="iconsh ico7h"></span>
			                    </a>
			            </div>
			        </div>
			    </div>
			    <Footer />
			</div>
		);

	}

});

ReactDOM.render(<App />, document.getElementById('app'));