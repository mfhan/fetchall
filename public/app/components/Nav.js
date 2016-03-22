var React = require('react');

var Nav = React.createClass({

	render: function(){
		return (
			<div className="navbar navbar-inverse navbar-static-top">
		      <div className="navbar-inner">
		        <div className="container">
		            <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		            </a>
		            <a className="brand" href="index.html">
		                <strong>CLEAN CANVAS</strong>
		            </a>
		            <div className="nav-collapse collapse">
		                <ul className="nav pull-right">
		                    <li><a href="index.html">HOME</a></li>
		                    <li><a href="about-us.html">ABOUT US</a></li>
		                    <li className="dropdown">
		                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
		                            PAGES
		                            <b className="caret"></b>
		                        </a>
		                        <ul className="dropdown-menu">
		                            <li><a href="features.html">Features</a></li>
		                            <li><a href="services.html">Services</a></li>
		                            <li><a href="portfolio.html">Portfolio</a></li>
		                            <li><a href="portfolio-item.html">Portfolio Item</a></li>
		                        </ul>
		                    </li>
		                </ul>
		            </div>
		        </div>
		      </div>
		    </div>			
		);
	}

});

module.exports = Nav;