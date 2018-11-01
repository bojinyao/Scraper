// Required NPM Packages
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

var app = express();

// Public Settings
app.use(express.static(__dirname + '/assets'));
var port = process.env.PORT || 8080;
var MONGODB_URI = "mongodb://heroku_77bwjwmb:f16mnt3i5p3sc9bd6cfs84f4up@ds115963.mlab.com:15963/heroku_77bwjwmb";
// Database
mongoose.connect(MONGODB_URI, function(err) {
	if(err) throw err;
	console.log('database connected');
});


// BodyParser Settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// Set up Handlebar for views
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Routes
var routes = require('./routes/news.js');
app.use('/',routes);

//Port
app.listen(port, function() {
    console.log("Listening on port:" + port);
});
