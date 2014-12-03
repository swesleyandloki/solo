var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
// var models = require('./backsies/commentSchema');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", function(req,res){
	res.sendFile(path.join(__dirname,'index.html'));
})
app.use(express.static(path.join(__dirname, '/funsies')));

mongoose.connect('mongodb://localhost/blackshirts');

var db = mongoose.connection;

var Comment;
var Vote;
var Shirt;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
  var CommentSchema = new mongoose.Schema({
    author: String,
    text: String
  });

  var ShirtSchema = new mongoose.Schema({
    username: String,
    imgLink: String,
    black: Boolean
  });

  var VoteSchema = new mongoose.Schema({
    yes: Boolean,
    no: Boolean
  });


  Comment = mongoose.model('Comment', CommentSchema);
  Shirt = mongoose.model('Shirt', ShirtSchema);
  Vote = mongoose.model('Vote', VoteSchema);
});

app.post('/api/Comment', function (req, res) {
	// What are you going to do when you get this request?
	// You should probably use the models here
	console.log('POSTING', req.body);
	comment = new Comment(req.body);
	comment.save(function(err){
		res.send('Comment Success!')
	});
});

app.get('/api/Comment', function (req, res) {
	// What are you going to do when you get this request?
	// You should probably use the models here
	console.log("gettinit");
	Comment.find(function(err,data){
		if(err){throw err;}
		res.send(data);
	})
});

app.post('/api/Vote', function (req, res) {
	// What are you going to do when you get this request?
	// You should probably use the models here
	console.log("I was here");
	vote = new Vote(req.body);
	vote.save(function(err){
		res.send('Vote Success!')
	});
});

app.get('/api/Vote', function (req, res) {
	// What are you going to do when you get this request?
	// You should probably use the models here
	console.log("gettinit");
	Vote.find(function(err,data){
		if(err){throw err;}
		res.send(data);
	})
});

app.post('/api/Shirt', function (req, res) {
	// What are you going to do when you get this request?
	// You should probably use the models here
	console.log("I was here");
	shirt = new Shirt(req.body);
	shirt.save(function(err){
		res.send('Shirt Success!')
	});
});

app.get('/api/Shirt', function (req, res) {
	// What are you going to do when you get this request?
	// You should probably use the models here
	console.log("gettinit");
	Shirt.find(function(err,data){
		if(err){throw err;}
		res.send(data);
	})
});


// configure our server with all the middleware and and routing
// require(app, express);

// export our app for testing and flexibility, required by index.js
app.listen(8000, function(){
	console.log('BALLSBALLSBALLS');
});
