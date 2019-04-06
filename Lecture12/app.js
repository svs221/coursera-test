(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves',LovesFilter)
.filter('truth',TruthFilter);

MsgController.$inject = ['$scope','lovesFilter'];

function MsgController($scope, lovesFilter) {

  $scope.name = "Skanda";
  $scope.stateOfBeing = "Empty";
  // $scope.cookieCost = .45;


  $scope.sayMessage = function() {
    var msg = "Skanda likes to eat!";
    // var output = $filter('uppercase')(msg);
    // return output;
      return msg;
  };

  $scope.sayLovesMessage = function() {
    var msg = "Skanda likes to eat!";
    msg = lovesFilter(msg);
    return msg;
  };

  $scope.make = function() {
    $scope.stateOfBeing = "Full";
  };
}

  function LovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("likes", "loves");
      return input;
    };
  }

  function TruthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    };
  }


})();
