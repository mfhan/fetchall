var superagent = require('superagent');
var Promise = require('bluebird');
var FetchDispatcher = require('../dispatcher/FetchDispatcher');
var FetchConstants = require('../constants/FetchConstants');


function urlRequest(method, path, params) {

    return new Promise(function (resolve, reject){

    	if (method.toLowerCase() == 'get'){
			superagent
				.get(path)
				.query(params)
				.set('Accept', 'application/json')
				.end(function(err, res){
					if (err){ reject(err); }
					else { resolve(res.body); }
				});
    	}


    	if (method.toLowerCase() == 'post'){
			superagent
				.post(path)
				.send(params)
				.set('Accept', 'application/json')
				.end(function(err, res){
					if (err){ reject(err); }
					else { resolve(res.body); }
				});

    	}

    	if (method.toLowerCase() == 'put'){
			superagent
				.put(path)
				.send(params)
				.set('Accept', 'application/json')
				.end(function(err, res){
					if (err){ reject(err); }
					else { resolve(res.body); }
				});

    	}

    });
}

module.exports = {

	updateProfile: function(profile){
		urlRequest('put', '/api/profile/'+profile.id, profile)
		.then(function(response){
			console.log('API UTILS - '+JSON.stringify(response));

			FetchDispatcher.dispatch({
				type: FetchConstants.USER_UPDATED,
				currentUser: response.result
			});
			
		})
		.catch(function(error){

		});
	},

	checkCurrentUser: function(){
		urlRequest('get', '/account/currentuser', null)
		.then(function(response){
//			console.log('CURRENT USER: '+JSON.stringify(response));
			FetchDispatcher.dispatch({
				type: FetchConstants.USER_UPDATED,
				currentUser: response.profile
			});

		})
		.catch(function(error){

		});
	},

	register: function(profile){
		console.log('API UTILS - Register: '+JSON.stringify(profile));
		urlRequest('post', '/api/profile', profile)
		.then(function(response){
			console.log(JSON.stringify(response));

			FetchDispatcher.dispatch({
				type: FetchConstants.USER_UPDATED,
				currentUser: response.result
			});
		})
		.catch(function(error){

		});

	}

}





