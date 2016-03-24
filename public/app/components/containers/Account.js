var React = require('react');


var Account = React.createClass({

	render: function(){
		return (
			<div>

		        <section id="content" style={{background: '#f9f9f9'}}>

		            <div className="content-wrap">

		                <div className="container clearfix">

		                    <div className="col_one_third">
		                        <div className="feature-box fbox-effect">
		                            <div className="fbox-icon">
		                                <a href="#"><i className="icon-screen i-alt"></i></a>
		                            </div>
		                            <h3>Responsive Layout</h3>
		                            <p>Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.</p>
		                        </div>
		                    </div>

		                    <div className="col_one_third">
		                        <div className="feature-box fbox-effect">
		                            <div className="fbox-icon">
		                                <a href="#"><i className="icon-eye i-alt"></i></a>
		                            </div>
		                            <h3>Retina Ready Graphics</h3>
		                            <p>Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Retina Icons, Fonts &amp; all others graphics are optimized.</p>
		                        </div>
		                    </div>

		                    <div className="col_one_third col_last">
		                        <div className="feature-box fbox-effect">
		                            <div className="fbox-icon">
		                                <a href="#"><i className="icon-beaker i-alt"></i></a>
		                            </div>
		                            <h3>Powerful Performance</h3>
		                            <p>Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance.</p>
		                        </div>
		                    </div>

		                    <div className="clear"></div>

		                    <div className="col_one_third nobottommargin">
		                        <div className="feature-box fbox-effect">
		                            <div className="fbox-icon">
		                                <a href="#"><i className="icon-stack i-alt"></i></a>
		                            </div>
		                            <h3>Premium Sliders Included</h3>
		                            <p>Canvas included 20+ custom designed Slider Pages with Premium Sliders like Layer, Revolution, Swiper &amp; others.</p>
		                        </div>
		                    </div>

		                    <div className="col_one_third nobottommargin">
		                        <div className="feature-box fbox-effect">
		                            <div className="fbox-icon">
		                                <a href="#"><i className="icon-tint i-alt"></i></a>
		                            </div>
		                            <h3>Unlimited Color Options</h3>
		                            <p>Change the color scheme of the Theme in a flash just by changing the 6-digit HEX code in the colors.php file.</p>
		                        </div>
		                    </div>

		                    <div className="col_one_third nobottommargin col_last">
		                        <div className="feature-box fbox-effect">
		                            <div className="fbox-icon">
		                                <a href="#"><i className="icon-text-width i-alt"></i></a>
		                            </div>
		                            <h3>CUSTOMIZABLE FONTS</h3>
		                            <p>Use any Font you like from Google Web Fonts, Typekit or other Web Fonts. They will blend in perfectly.</p>
		                        </div>
		                    </div>

		                    <div className="clear"></div><div className="line"></div>

		                    <div id="oc-clients-full" className="owl-carousel image-carousel carousel-widget" data-margin="30" data-nav="false" data-pagi="false" data-items-xxs="2" data-items-xs="3" data-items-sm="4" data-items-md="5" data-items-lg="5">

		                        <a href="#"><img src="images/clients/1.png" alt="Clients" /></a>
		                        <a href="#"><img src="images/clients/2.png" alt="Clients" /></a>
		                        <a href="#"><img src="images/clients/3.png" alt="Clients" /></a>
		                        <a href="#"><img src="images/clients/4.png" alt="Clients" /></a>
		                        <a href="#"><img src="images/clients/5.png" alt="Clients" /></a>
		                    </div>
		                </div>
		            </div>
		        </section> 

			</div>
		);
	}

});

module.exports = Account;