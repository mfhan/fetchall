var React = require('react');
var ReactDOM = require('react-dom');
var Sidebar = require('./components/Sidebar');
var Footer = require('./components/Footer');
var Register = require('./components/Register');
var Home = require('./components/containers/Home');

var App = React.createClass({

	render: function(){
		return(

			<div>
		        <Sidebar />
		        <Home />
		        <Footer /> 
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));