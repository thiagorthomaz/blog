
var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('AboutCtrl', ['$scope',
  function AboutCtrl($scope){

  console.log("About");

}]);

blogControllers.controller('HomeCtrl', ['$scope',
  function HomeCtrl($scope){

    console.log("Home");

}]);

blogControllers.controller('SkillCtrl', ['$scope',
  function SkillCtrl($scope){

  console.log("Skill");

}]);

blogControllers.controller('ContactCtrl', ['$scope',
  function SkillCtrl($scope){
    console.log("Contact");
    
}]);