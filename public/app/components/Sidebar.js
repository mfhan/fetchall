var React = require('react');
var FetchClientActions = require('../actions/FetchClientActions');
var FetchServerActions = require('../actions/FetchServerActions');
var ProfileStore = require('../stores/ProfileStore');


var Sidebar = React.createClass({

	render: function(){
		return (
	        <header id="header" className="no-sticky">

	            <div id="header-wrap">
	                <div className="container clearfix">
	                    <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>
	                    <div id="logo" className="nobottomborder">
	                        <a href="/" className="standard-logo" data-dark-logo="images/logo-side-dark.png">
	                        	<img src="images/logo-side.png" alt="Canvas Logo" />
	                        </a>
	                        <a href="/" className="retina-logo" data-dark-logo="images/logo-side-dark@2x.png">
	                        	<img src="images/logo-side@2x.png" alt="Canvas Logo" />
	                        </a>
	                    </div>

	                    <nav id="primary-menu">
	                        <ul>
	                            <li>
	                                <a href="/"><div>Home</div></a>
	                            </li>
	                            <li>
	                                <a href="/about"><div>About Me</div></a>
	                            </li>
	                           	<li>
	                                <a href="/work"><div>Work With Us!</div></a>
	                            </li>

	                        </ul>
	                    </nav>

	                    <div className="clearfix visible-md visible-lg">
	                        <a href="#" className="social-icon si-small si-borderless si-facebook">
	                            <i className="icon-facebook"></i>
	                            <i className="icon-facebook"></i>
	                        </a>

	                        <a href="#" className="social-icon si-small si-borderless si-twitter">
	                            <i className="icon-twitter"></i>
	                            <i className="icon-twitter"></i>
	                        </a>
	                    </div>
	                </div>
	            </div>
	        </header>
		);
	}

});

module.exports = Sidebar;