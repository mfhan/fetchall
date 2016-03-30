var React = require('react');

var Upload = React.createClass({

	render: function(){
		return (
			<div className="container">
				<h1>Upload</h1>
				<form action="/upload/test" method="post" enctype="multipart/form-data">
				    <p>Public ID: <input type="text" name="title"/></p>
				    <p>Image: <input type="file" name="image"/></p>
				   	<p><input type="submit" value="Upload"/></p>
				</form>

			</div>
		);
	}

});

module.exports = Upload;