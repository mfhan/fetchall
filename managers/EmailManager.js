module.exports = {

	sendEmail: function(sender, recipient, subject, text, completion){

		var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

		sendgrid.send({
			to:       recipient,
			from:     sender,
			subject:  subject,
			html:     text
		}, function(err, json) {
			if (err) { 
				if (completion != null){
					completion(err, null);
					return;
				}
			}

			if (completion != null){
				completion(null, json);
			}
		});
	}


}