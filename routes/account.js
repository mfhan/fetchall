var express = require('express');
var router = express.Router();
var ProfileController = require('../controllers/ProfileController');
var bcrypt = require('bcrypt');


function createErrorResponse(msg){
	return {
		confirmation:'fail',
		message: msg
	}
}

router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource;

	if (resource == 'logout'){
		req.session.reset();
		res.redirect('/');
	}

	if (resource == 'currentuser'){
		if (req.session == null){
			res.json(createErrorResponse('User Not Logged In.'));
			return;
		}

		if (req.session.user == null){
			res.json(createErrorResponse('User Not Logged In.'));
			return;
		}

		ProfileController.getById(req.session.user, function(err, result){
			if (err){
				res.json(createErrorResponse(err.message));
				return;
			}

			res.json({
				confirmation:'success',
				profile: result
			});

			return;
		});
	}
});

router.post('/:resource', function(req, res, next) {
	var resource = req.params.resource;
	if (resource == 'login'){
		ProfileController.get({email:req.body.email}, true, function(err, results){
			if (err){
				res.json(createErrorResponse(err.message));
				return;
			}

			if (results.length == 0){
				res.json(createErrorResponse('User Not Found'));
				return;
			}

			var p = results[0];
			var passwordCorrect = bcrypt.compareSync(req.body.password, p.password);
			if (passwordCorrect == false){
				res.json(createErrorResponse('Incorrect Password'));
				return;
			}

			req.session.user = p._id;

			res.json({
				confirmation:'success',
				profile: p.summary()
			});

			return;
		});
	}

});

module.exports = router;


