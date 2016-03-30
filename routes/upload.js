var express = require('express');
var router = express.Router();

var fs = require('fs');
var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'sample', 
  api_key: '874837483274837', 
  api_secret: 'a676b67565c6767a6767d6767f676fe1' 
});

// var stream = cloudinary.uploader.upload_stream(function(result) { console.log(result); });
// var file_reader = fs.createReadStream('my_picture.jpg', {encoding: 'binary'}).on('data', stream.write).on('end', stream.end);

router.post('/:resource', function(req, res, next) {
//    res.render('index', { title: 'Express' });

	var stream = cloudinary.uploader.upload_stream(function(result) {
	    console.log('RESULT: '+result);

	    res.send('Done:<br/> <img src="' + result.url + '"/><br/>' +
	             cloudinary.image(result.public_id, { format: "png", width: 100, height: 130, crop: "fill" }));
	  }, 
	  { public_id: req.body.title } );
	
	  fs.createReadStream(req.files.image.path, {encoding: 'binary'}).on('data', stream.write).on('end', stream.end);

});


module.exports = router;
