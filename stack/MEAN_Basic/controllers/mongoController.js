var MongooseModel = require('../models/mongooseModel.js');

function mongoTest (req,res) {
	// console.log(req.body.string);

	var newMongo  = new MongooseModel ({
		testString  : req.body.string,
	});
	console.log('newMongo: ', newMongo)

	newMongo.save(function(saveErr, user){
	    if (saveErr) { 
	    	res.send('Mongo Experienced a Save Error') 
	    }
	    else {
	    	console.log('New String Saved')
	        res.send('Mongo confirmed saving the string...Success!')
	    }
	});

}

module.exports = {
	mongoTest : mongoTest,
}