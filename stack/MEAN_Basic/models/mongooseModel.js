var mongoose = require('mongoose');

var testSchema = mongoose.Schema({
	wolfName  : {type : String, required : true},  		
})

module.exports = mongoose.model('Test', testSchema);