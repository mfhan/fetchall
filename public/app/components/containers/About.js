var React = require('react');


var About = React.createClass({
	render: function(){

		return (
			<div>
		        <section id="content" style={{backgroundImage: 'url("images/account_bkg.jpg")', minHeight:900}}>

		            <div className="content-wrap" style={{padding:0}}>
		                <div className="container clearfix">
							<h1 ><span style={{color:'#fff',textShadow:'1px 1px #000'}}>About Me</span></h1>
		                </div>
		            </div>
		        </section>
			</div>
		);
	}

});

module.exports = About;