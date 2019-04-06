(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];

function MsgController($scope) {

  $scope.name = "Skanda";
  $scope.stateOfBeing = "Empty";


  $scope.sayMessage = function() {
    return "Skanda likes to eat!";
  }

  $scope.make = function() {
    $scope.stateOfBeing = "Full";
  }



}

})();
