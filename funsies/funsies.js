angular.module('funsies', [
  'ngFx',
  'ui.router'
])


.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('black', {
      templateUrl:'black/black.html',
      controller: 'BlackController',
      url: '/black',
      // authenticate: true
    })
    .state('shirts', {
      templateUrl:'shirts/shirts.html',
      controller: 'ShirtController',
      url: '/shirts',
      // authenticate: true
    })
    .state('signin', {
      templateUrl:'auth/signin/signin.html',
      controller: 'AuthController',
      url: '/signin'
    })
    .state('signout', {
      templateUrl:'auth/signout.html',
      controller: 'AuthController',
      url: '/signout'
    })
    .state('whoops', {
      templateUrl:'whoops.html',
      controller: 'WhoopsController',
      url: '/whoops'
    })
    
  })

.controller('VoteController', function($scope){
  $scope.yesSir = 0;
  $scope.noSir = 0;
  $scope.unclickable = false;
  $scope.yesIncrement = function(){
    $scope.unclickable = true;
    $scope.yesSir++;
    $scope.digest();
  }
  $scope.noIncrement = function(){
    $scope.unclickable = true;
    $scope.noSir++;
    $scope.digest();
  }
})

.controller('WhoopsController', function($scope){

})

.controller('BlackController', function($scope){

})

.controller('AuthController', function($scope){

})


.controller('CommentsController', function($scope){
  $scope.commentBucket = [{author: 'me', text: 'fred has black shirts'},{author: 'ash', text: 'more praise'}];
  $scope.submitComment = function(){
  	var comment = {};
  	comment.author = $scope.commentAuthor;
  	comment.text = $scope.commentText;
  	$scope.commentBucket.push(comment);
  	$scope.commentAuthor = '';
  	$scope.commentText = '';

  }
})

.controller('ShirtController', function($scope, $interval){
  var linkIndex = 0;
  $scope.linkBucket = [{url: "https://pbs.twimg.com/profile_images/520822528/HEADSHOT-2_400x400.jpg"},{url:"https://avatars0.githubusercontent.com/u/99825?v=3&s=460"}];
  $scope.currentLink = $scope.linkBucket[linkIndex].url;
  $scope.submitPic = function(){
  	var link = {};
  	link.url = $scope.imgLink;
  	$scope.linkBucket.push(link);
  	$scope.imgLink = '';
  };
  $scope.changeFredsFace = function(){
  	linkIndex++;
  	if(!$scope.linkBucket[linkIndex]){
  	  linkIndex = 0;
  	}
  	$scope.currentLink = $scope.linkBucket[linkIndex].url;
  	// console.log($scope.currentLink);
  }
  $interval($scope.changeFredsFace, 2000);

});
