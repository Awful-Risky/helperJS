var mongoose = require('mongoose');

var testSchema = mongoose.Schema({
	testString  : {type : String, required : true},  		
})

module.exports = mongoose.model('Test', testSchema);