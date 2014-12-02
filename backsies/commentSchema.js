var mongoose = require('mongoose'),

var CommentSchema = new mongoose.Schema({
 username: String,
 text: String
});

var ShirtSchema = new mongoose.Schema({
  username: String,
  imgLink: String,
  black: Boolean
});

var VoteSchema = new mongoose.Schema({
  yes: Number,
  no: Number
});


module.exports.comments = mongoose.model('Comment', CommentSchema);
module.exports.shirts = mongoose.model('Shirt', CommentSchema);
module.exports.votes = mongoose.model('Vote', CommentSchema);
