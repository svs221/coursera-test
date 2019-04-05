(function () {
'use strict';


angular.module('NameCalculator', [])

.controller('NameCalculatorController', function($scope){

$scope.name = "";
$scope.total = 0;

$scope.displayNumeric = function(){
  var totalValue = calculateNumeric($scope.name);
  $scope.total = totalValue;


  };

  function calculateNumeric(string){
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }





});


})();
