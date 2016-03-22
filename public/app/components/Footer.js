var React = require('react');

var Footer = React.createClass({

	render: function(){
		return (
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
		);
	}

});

module.exports = Footer;