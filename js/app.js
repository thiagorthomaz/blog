var blogApp = angular.module('blogApp',[
  'ngRoute',
  'blogControllers'
]);

blogApp.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider){
  $routeProvider.
    when('/',{
      templateUrl : 'partials/about.html',
      controller: 'HomeCtrl'
    }).when('/home',{
      templateUrl : 'partials/home.html',
      controller: 'HomeCtrl'
    }).when('/about',{
      templateUrl : 'partials/about.html',
      controller: 'AboutCtrl'
    }).when('/skills',{
      templateUrl : 'partials/skills.html',
      controller: 'SkillCtrl'
    }).when('/contact',{
      templateUrl : 'partials/contact.html',
      controller: 'ContactCtrl'
    });

    $locationProvider.html5Mode(false).hashPrefix('!');

}]);


blogApp.controller("MenuController",function($scope, $http) {
  
  $scope.items = [
    {"title" : "Home", "url" : "#!home", "target" : "_self"},
    {"title" : "About", "url" : "#!about", "target" : "_self"},
    {"title" : "Skils", "url" : "#!skills", "target" : "_self"},
    {"title" : "Contact", "url" : "#!contact", "target" : "_self"},
    {"title" : "Github", "url" : "https://github.com/thiagorthomaz/", "target" : "_blank"}
  ];
  
  
  
});