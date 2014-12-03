
var username = prompt('What is your name?')

angular.module('funsies', [
  'funsies.services',
  'ngFx',
  'ui.router'
])


.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('black', {
      templateUrl:'black/black.html',
      controller: 'ShirtController',
      url: '/black',
      // authenticate: true
    })
    .state('shirts', {
      templateUrl:'shirts/shirts.html',
      controller: 'ShirtController',
      url: '/shirts',
      // authenticate: true
    })
    
  })


.controller('VoteController', function(Votes, $scope, $interval){
  $scope.data = {};
  $scope.unclickable = false;
  $scope.getVotes = function(){
    // for each link in links make property $scope.data.link = link;
    Votes.get()
    .then(function(results){
      console.log('VOTESVOTESVOTES',results);
      var yesCount = 0;
      var noCount = 0;
      for(var i=0; i<results.length; i++){
        if(results[i]['yes']===true){
          yesCount++;
        }else{
          noCount++;
        }
      }
      $scope.yesSir = yesCount;
      $scope.noSir = noCount;
    })
    .catch(function(err) {
      console.log(err);
      console.log('NOVOTES')
    });
  };
  $interval($scope.getVotes, 1000);
  $scope.yesIncrement = function(){
    var vote = {};
    $scope.unclickable = true;
    $scope.yesSir++;
    vote['yes'] = true;
    vote['no'] = false;
    Votes.add(vote)
    .then(function(){
      Votes.get();
    })
  }
  $scope.noIncrement = function(){
    var vote = {};
    $scope.unclickable = true;
    $scope.noSir++;
    vote['yes'] = false;
    vote['no'] = true;
    Votes.add(vote)
    .then(function(){
      Votes.get();
    })
  }
})


.controller('CommentsController', function(Comments, $interval, $scope){
  $scope.data = {};
  $scope.data.commentBucket = [{author: 'me', text: 'fred has black shirts'},{author: 'ash', text: 'more praise'}];
  $scope.submitComment = function(){
    var comment = {};
    comment.author = username;
    comment.text = $scope.commentText;
    console.log(comment);
    Comments.add(comment);
    $scope.commentText = '';
  }
  $scope.getComments = function(){
    // for each link in links make property $scope.data.link = link;
    Comments.get()
    .then(function(results){
      console.log(results);
      $scope.data.commentBucket = results;

    })
    .catch(function(err) {
      console.log(err);
    });
  };
  $interval($scope.getComments, 3000);
})

.controller('ShirtController', function(Shirts, $scope, $interval){
  $scope.data = {};
  var linkIndex = 0;
  $scope.data.linkBucket = [{imgLink: "https://pbs.twimg.com/profile_images/520822528/HEADSHOT-2_400x400.jpg"},{imgLink:"https://avatars0.githubusercontent.com/u/99825?v=3&s=460"}];
  $scope.currentLink = $scope.data.linkBucket[linkIndex].imgLink;
  $scope.submitPic = function(){
    var shirt = {};
    shirt.imgLink = $scope.imgLink;
    shirt.black = $scope.black;
    shirt.username = username;
    Shirts.add(shirt);
    $scope.imgLink = '';
    $scope.black = false;
  };
  $scope.getShirts = function(){
    // for each link in links make property $scope.data.link = link;
    Shirts.get()
    .then(function(results){
      console.log(results);
      $scope.data.linkBucket = results;

    })
    .catch(function(err) {
      console.log(err);
    });
  };
  $interval($scope.getShirts, 3000);

  $scope.changeFredsFace = function(){
    linkIndex++;
    if(linkIndex>=$scope.data.linkBucket.length){
      console.log('PUPPIES',linkIndex);
      linkIndex = 0;
    }

    $scope.currentLink = $scope.data.linkBucket[linkIndex].imgLink;
  }
  $interval($scope.changeFredsFace, 2000);

});