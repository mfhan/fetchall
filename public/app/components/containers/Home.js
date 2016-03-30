var React = require('react');
var Register = require('../../components/Register');

var Home = React.createClass({

	render: function(){
		return (
			<div>

		        <section id="slider" className="slider-parallax swiper_wrapper full-screen clearfix">
		            <div className="slider-parallax-inner">

		                <div className="swiper-container swiper-parent">
		                    <div className="swiper-wrapper">
		                        <div className="swiper-slide" style={{backgroundImage: 'url("images/slider/swiper/1.jpg")', backgroundPosition: 'center top'}}>
		                            <div className="container clearfix">
		                                <div className="slider-caption slider-caption-left">
		                                	<br />
		                                    <h2 style={{color:'#fff'}} data-caption-animate="fadeInUp">Fetch</h2>
		                                    <p style={{color:'#fff'}} data-caption-animate="fadeInUp" data-caption-delay="200">What you want <br />&amp; When you want it!.</p>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>

		            </div>

		            <div className="container clearfix">
		                <Register />
		            </div>
		        </section>

		        <section id="content" style={{background: '#ffffff'}}>

		            <div className="content-wrap">

            				<div className="col_full nobottommargin center">
								<h2>How it works?</h2>
								<h3>A simple way to get what you need when you need</h3>
							</div>
							<br />
							<div>
								<div className="container clearfix">
									<div className="col_one_third">

				                        <div className="feature-box fbox-center fbox-effect">
				                            <div className="fbox-icon">
				                                <a href="#"><i className="icon-edit i-alt"></i></a>
				                            </div>
				                            <h3>Place Order</h3>
				                            <p>Simply type what you want and where it is</p>
				                        </div>
				                        
				                    </div>

				                    <div className="col_one_third">
				                        <div className="feature-box fbox-center fbox-effect">
				                            <div className="fbox-icon">
				                                <a href="#"><i className="icon-bolt i-alt"></i></a>
				                            </div>
				                            <h3>Fetch</h3>
				                            <p>Fetecher will deliver items less than 30mins</p>
				                        </div>
				                    </div>

				                    <div className="col_one_third col_last">
				                        <div className="feature-box fbox-center fbox-effect">
				                            <div className="fbox-icon">
				                                <a href="#"><i className="icon-dollar i-alt"></i></a>
				                            </div>
				                            <h3>Payment</h3>
				                            <p>Simply pay via your Paypal</p>
				                        </div>
				                    </div>
				                </div>
							</div>


			                <div className="container clearfix">
			                	<div className="col-md-1">
			                	</div>

		                		<div className="col-md-11">
		                			<h2>Benefits</h2> 
									<div className="heading-block">
										<h4>Simple</h4>
										<span>Text what you want when you want it</span>
									</div>
									<div className="heading-block">
										<h4>Secured</h4>
										<span>Automated verification for all parties</span>
									</div>
									<div className="heading-block">
										<h4>Convenience</h4>
										<span>Deliver your favorite within minutes</span>
									</div>
								</div>
							</div>
		            </div>
		        </section>
<<<<<<< HEAD
=======
		       
		        <div id="content">
		        	
			        	<div className="content-wrap">
		        			
	        			<div id="posts" className="post-grid grid-container nobottommargin" style={{position:'relative', height:'100'}}>

							<div className="entry clearfix">
								<div className="container clearfix" style={{position:'absolute', left:'450', height:'50'}}>
									<div>
										<h3>Try it for free!</h3>
										<a className="button button-xlarge button-rounded" href="#">Join</a>
									</div>
								</div>
		                	</div>
						</div>
					
					</div>
		        
		        </div>
>>>>>>> homepage

			</div>
		);
	}

});

module.exports = Home;