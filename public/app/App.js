var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({

	render: function(){

		return (
			<div>

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

			    <div id="coming_soon">
			        <div className="head">
			            <div className="container">
			                <div className="span6 text">
			                    <h4>What You Want<br />When You Want It</h4>
			                    <p>
			                        We are currently working on an awesome new site. <span>STAY TUNED!</span>
			                        <br />
			                        Please don´t  forget to check out our tweets and subscribe to be notified.</p>
			                </div>

			                <div className="span4 count">
			                    <div className="form" style={{background:'rgba(0,0,0,0.7)', padding:24}}>
				                    <h4 style={{color:'#fff'}}>Sign Up</h4>
				                    <hr />
			                        <form>
			                            <input style={{width:90+'%'}} type="text" placeholder="Email" /><br />
			                            <input style={{width:90+'%'}} type="text" placeholder="Password" /><br />
			                            <br />
			                            <button className="btn btn-success" type="submit" value="sign up">Join</button>
			                        </form>
			                    </div>

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

			    <footer id="footer">
			        <div className="container">
			            <div className="row info">
			                <div className="span6 residence">
			                    <ul>
			                        <li>2301 East Lamar Blvd. Suite 140. City, Arlington.</li>
			                        <li>United States, Zip Code TX 76006.</li>
			                    </ul>
			                </div>
			                <div className="span5 touch">
			                    <ul>
			                        <li><strong>P.</strong> 1 817 274 2933</li>
			                        <li><strong>E.</strong><a href="#"> bootstrap@twitter.com</a></li>
			                    </ul>
			                </div>
			            </div>
			            <div className="row credits">
			                <div className="span12">
			                    <div className="row social">
			                        <div className="span12">
			                            <a href="#" className="facebook">
			                                <span className="socialicons ico1"></span>
			                                <span className="socialicons_h ico1h"></span>
			                            </a>
			                            <a href="#" className="twitter">
			                                <span className="socialicons ico2"></span>
			                                <span className="socialicons_h ico2h"></span>
			                            </a>
			                            <a href="#" className="gplus">
			                                <span className="socialicons ico3"></span>
			                                <span className="socialicons_h ico3h"></span>
			                            </a>
			                            <a href="#" className="flickr">
			                                <span className="socialicons ico4"></span>
			                                <span className="socialicons_h ico4h"></span>
			                            </a>
			                            <a href="#" className="pinterest">
			                                <span className="socialicons ico5"></span>
			                                <span className="socialicons_h ico5h"></span>
			                            </a>
			                            <a href="#" className="dribble">
			                                <span className="socialicons ico6"></span>
			                                <span className="socialicons_h ico6h"></span>
			                            </a>
			                            <a href="#" className="behance">
			                                <span className="socialicons ico7"></span>
			                                <span className="socialicons_h ico7h"></span>
			                            </a>
			                        </div>
			                    </div>
			                    <div className="row copyright">
			                        <div className="span12">
			                            © 2013 Clean Canvas. All rights reserved. Theme by Detail Canvas.
			                        </div>
			                    </div>
			                </div>            
			            </div>
			        </div>
			    </footer>





			</div>
		);

	}

});

ReactDOM.render(<App />, document.getElementById('app'));