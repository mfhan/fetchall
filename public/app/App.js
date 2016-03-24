var React = require('react');
var ReactDOM = require('react-dom');
var Sidebar = require('./components/Sidebar');
var Footer = require('./components/Footer');
var Register = require('./components/Register');
var Home = require('./components/containers/Home');
var Account = require('./components/containers/Account');



var App = React.createClass({
	componentWillMount: function(){
		var path = window.location.pathname.replace('/', ''); // http://localhost:3000/
		var page = 'home';

		if (path.length > 0){ // not a home page request
			var parts = path.split('/');
			page = parts[0];
		}

		console.log('componentWillMount == '+page);
	},

	render: function(){
		return(

			<div>
		        <Sidebar />
		        <Account />
		        <Footer /> 
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));