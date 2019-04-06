(function () {
'use strict';


angular.module('LunchApp', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

$scope.list = "";
$scope.message = "";
$scope.correctColor = "";
$scope.borderColor = "grey";

$scope.check = function(){

  if($scope.list == ""){
    $scope.correctColor = "red";
    $scope.borderColor = "red"
    $scope.message = "Please enter data first";

  }
  else{
    $scope.correctColor = "green";
    $scope.borderColor = "green";
    var items = $scope.list.split(",");
    var count = 0;
    for(var i = 0; i < items.length; ++i){
      if(items[i].trim() != ""){
        count += 1;
      }
    }

    if(count <= 3){
      $scope.message = "Enjoy!";
    }
    else{
      $scope.message = "Too much!";
    }

  }
}


}


})();
