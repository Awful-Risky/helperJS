var MongooseModel = require('../models/mongooseModel.js');

function mongoTest (req,res) {
	res.send('Back-End Controller Working')
}

module.exports = {
	mongoTest : mongoTest,
}