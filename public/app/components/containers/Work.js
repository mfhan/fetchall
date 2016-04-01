var React = require('react');

var Work = React.createClass({

	render: function(){
		return(
			<div>
		        <section id="content" style={{backgroundImage: 'url("images/account_bkg.jpg")'}}>
							<div id="work-content" style={{background: '#f9f9f9', padding:0, margin:90, opacity:0.8}}>
		            			<div className="content-wrap">
            						<div className="col_full  center">
								<h2>Come Work With Us!</h2>
								<h3>A simple way to earn money while making people happy</h3>
							</div>
							<br />
							<div>
								<div className="container clearfix">
									<div className="col_one_third">

				                        <div className="feature-box fbox-center fbox-effect">
				                            <div className="fbox-icon">
				                                <a href="#"><i className="icon-edit i-alt"></i></a>
				                            </div>
				                            <h3>Simple</h3>
				                            <p>Simply claim any job you see</p>
				                        </div>

				                    </div>

				                    <div className="col_one_third">
				                        <div className="feature-box fbox-center fbox-effect">
				                            <div className="fbox-icon">
				                                <a href="#"><i className="icon-bolt i-alt"></i></a>
				                            </div>
				                            <h3>Easy</h3>
				                            <p>Payment is automated, and you keep any tip</p>
				                        </div>
				                    </div>

				                    <div className="col_one_third col_last">
				                        <div className="feature-box fbox-center fbox-effect">
				                            <div className="fbox-icon">
				                                <a href="#"><i className="icon-dollar i-alt"></i></a>
				                            </div>
				                            <h3>Fun</h3>
				                            <p>A Great Way to Meet People!</p>
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
										<span>Work when you want to</span>
									</div>
									<div className="heading-block">
										<h4>Security</h4>
										<span>Automated verification for all parties</span>
									</div>
									<div className="heading-block">
										<h4>Convenience</h4>
										<span>Deliver your favorite within minutes</span>
									</div>
								</div>
							</div>
		            </div>
		        </div>

		        </section>

			</div>

		)
	}
});
module.exports = Work;