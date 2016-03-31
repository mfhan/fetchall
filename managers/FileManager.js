var fs = require('fs');
var Promise = require('bluebird');

module.exports = {
	fetchFile =function(path){
		return new Promise(function (resolve, reject){
			fs.readFile(path, 'utf8', function(err, data){
				if (err){
					reject(err);
				}
				else {
					resolve(data);
				}
			});
		});
	}
}