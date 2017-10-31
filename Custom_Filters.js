<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<body ng-app = "MyApp">

<div ng-controller = "MyCtrl">
  Original Message: {{SayMessage()}}; <br>
  New Message: {{SayLovesMessage()}};
</div>

<script>
 
angular.module("MyApp", [])
.controller("MyCtrl", FactoryFunction)
.filter("loves", LovesFilter);

FactoryFunction.$inject = ['$scope', "lovesFilter"];

function FactoryFunction($scope, lovesFilter) {
  
  $scope.StateOfBeing = "hungry";
  
  $scope.SayMessage = function() {
    var msg = "Brad likes to code in AngularJs";
    return msg;
  }; 
  
  $scope.SayLovesMessage = function() {
    var msg = "Brad likes to code in AngularJs";
    msg = lovesFilter(msg);
    return msg;
  }; 
  
  $scope.FeedMe = function() {
    $scope.StateOfBeing = "fed";
  };
 }
 
  
function LovesFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  };
 }  



</script>
</body>
</html>
