/**
* Created by malabya on 15/12/15.
*/

var demoApp = angular.module('demoApp', ['ngRoute', 'ngSanitize']);

// configure our routes
demoApp.config(function($routeProvider, $locationProvider) {
  $routeProvider

  // route for the home page
  .when('/', {
    templateUrl : 'views/home.html',
    controller  : 'articleListing'
  })

  // route for the about page
  .when('/about', {
    templateUrl : 'views/about.html',
    controller  : 'aboutController'
  })

  // route for the contact page
  .when('/contact', {
    templateUrl : 'views/contact.html',
    controller  : 'contactController'
  })

  // route for Posts
  .when('/post/:title', {
    templateUrl : 'views/post.html',
    controller  : 'postController'
  })

  .otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
});


//*******************Artice Listing Controller*******************//
demoApp.controller('articleListing', function ($rootScope, $scope, $http) {
  $http.get("http://editor.demo.local/api/editor/posts")
  .then(function (response) {
    $scope.articles = response.data;
  });
  $rootScope.header = "Angular Blog | Drupal8 AngularJS";
});

//********************BlogPost Controller************************************//
demoApp.controller('postController', function($rootScope, $scope, $routeParams, $http)  {
  $scope.title = $routeParams.title;
  $http.get("http://editor.demo.local/post/" + $routeParams.title + "?_format=json")
  .success(function(response){
    $scope.title = response.title[0]['value'];
    $scope.body = response.body[0]['value'];
    $rootScope.header = response.title[0]['value'] + "| Drupal8 AngularJS";
  });
});

//**************About Me Controller*********************//
demoApp.controller('aboutController', function($rootScope){
  $rootScope.header = "About Me | Drupal8 AngularJS";
});

//******************Contact Controller*******************//
demoApp.controller('contactController', function($rootScope){
  $rootScope.header = "Contact | Drupal8 AngularJS";
});
