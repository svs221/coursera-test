(function () {
'use strict';


angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope){
  $scope.name = "Skanda"
  $scope.sayHello = function(){
    return "Hello Coursera"
  };

});


})();
