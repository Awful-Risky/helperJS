var express    = require('express');
var bodyParser = require('body-parser');
var logger     = require('morgan');
var mongoose   = require('mongoose');

//---Require Back-End Controllers---------------------------
var mongoCtrl = require('./controllers/mongoController.js')

//---Create Express App Object------------------------------
var app = express();


//---Spin Up Database Server at db = meanDB
mongoose.connect('mongodb://localhost/meanDB');



// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('home.html', {root : __dirname + '/public/html'})
});

app.post('/mongoTest', mongoCtrl.mongoTest);


// Creating Server and Listening for Connections \\
var port = 8080
app.listen(port, function(){
  console.log('Server running on port ' + port);

})