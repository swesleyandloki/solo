var path = require('path');
var express = require('express');
var mongoose = require('mongoose');

var app = express();
app.get("/", function(req,res){
	res.sendFile(path.join(__dirname,'index.html'));
})
app.use(express.static(path.join(__dirname, '/funsies')));

mongoose.connect('mongodb://localhost/fredwearsblackshirts');

// configure our server with all the middleware and and routing
// require(app, express);

// export our app for testing and flexibility, required by index.js
app.listen(8000, function(){
	console.log('BALLSBALLSBALLS');
});
