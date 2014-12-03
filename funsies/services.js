angular.module('funsies.services', [])

.factory('Comments', function ($http) {
  // Your code here
  var get = function() {
    return $http({
      method: 'GET',
      url: '/api/Comment'
    })
    .then(function(resp){
      console.log('RESPONDING',resp);
      return resp.data;
    });
  };
  var add = function(commentObj) {
    console.log('this is a comment obj',commentObj)
    return $http({
      method: 'POST',
      url: '/api/Comment',
      data: commentObj
    })
    .then(function(){
      console.log('HeyThere!');
    })
    .catch(function(err){
      console.log(err, 'CAUGHTCAUGHT!');
    });
  };
  return {
    get: get,
    add: add
  };
})
.factory('Shirts', function ($http) {
  // Your code here
  var get = function() {
    return $http({
      method: 'GET',
      url: '/api/Shirt'
    })
    .then(function(resp){
      console.log('RESPONDING',resp);
      return resp.data;
    });
  };
  var add = function(shirtObj) {
    return $http({
      method: 'POST',
      url: '/api/Shirt',
      data: shirtObj
    })
    .then(function(){
      console.log('HeyThere!');
    })
    .catch(function(err){
      console.log(err, 'CAUGHTCAUGHT!');
    });
  };
  return {
    get: get,
    add: add
  }
})
.factory('Votes', function ($http) {
  // Your code here
  var get = function() {
    return $http({
      method: 'GET',
      url: '/api/Vote'
    })
    .then(function(resp){
      console.log('RESPONDING',resp);
      return resp.data;
    });
  };
  var add = function(vote) {
    return $http({
      method: 'POST',
      url: '/api/Vote',
      data: vote
    })
    .then(function(){
      console.log('HeyThere!');
    })
    .catch(function(err){
      console.log(err, 'CAUGHTCAUGHT!');
    });
  };
  return {
    get: get,
    add: add
  };
});
