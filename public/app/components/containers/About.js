var React = require('react');


var About = React.createClass({
	render: function(){

		return (

			<section id="content" style={{backgroundImage: 'url("images/account_bkg.jpg")'}}>
				<div id="work-content" style={{background: '#f9f9f9', padding:0, margin:90, opacity:0.9}}>
		            <div className="content-wrap">
            			<div className="col_full  center">
							<h1>MARIE-FRANCE HAN</h1>
								<img src={"images/closeup_small_round.png"}  style={{width:300, float:'left', paddingLeft:90, paddingTop: 20}} />
								<br />
								<h2 float='right' style={{font:'roboto', color:'#e60073'}}  >Developer</h2><br />
								<h2 float='right' style={{font:'roboto', color:'#e60073'}}  >Journalist</h2><br />
								<h2 float='right' style={{font:'roboto', color:'#e60073'}}  >Writer</h2><br />
								<br />
						</div>
						<br />
						<div className="tabs tabs-bordered clearfix" id="tab-2" position='center' style={{font:'roboto', color:'#000'}} >
						<ul className="tab-nav clearfix" position='center'>
							<li><a href="#tabs-6">A Bit About Me</a></li>
							<li><a href="#tabs-7">Work Samples</a></li>
							<li>< a href="#tabs-8">References</a></li>
						</ul>
							<div className="tab-container" style={{background:'#f9f9f9'}}>
								<div className="tab-content clearfix" id="tabs-6">
									<div className="col_two_third nobottommargin">
										<div className="well well-lg nobottommargin">
											<form id="login-form" name="login-form" className="nobottommargin" action="#" method="post">
												<h3>Biography</h3>
												<h4 style={{font:'Lato', color:'#000', size:16}}>Born in France, raised in Africa, worked in Asia and lives in New York.
												</h4>
											</form>
										</div>
									</div>
								</div>
								<div className="tab-content clearfix" id="tabs-7">
									<div className="col_two_third nobottommargin">
										<div className="well well-lg nobottommargin">
											<h3>Work Samples</h3>
											<h4 style={{font:'Lato', color:'#000', size:16}}>
												<ul>
													<li><a href="https://github.com/mf han?tab=repositories">My GitHub Repo</a></li>
													<li><a href="https://git.heroku.com/mf-landing-page.git">Work Sample: a landing page using Angular</a></li>
													<li><a href="https://www.linkedin.com/in/mariefr">My LinkedIn Page </a></li>

												</ul>
											</h4>
										</div>
									</div>
								</div>
								<div className="tab-content clearfix" id="tabs-8">
								</div>
							</div>
						</div>
					</div>
				</div>
		    </section>
		);
	}

});

module.exports = About;