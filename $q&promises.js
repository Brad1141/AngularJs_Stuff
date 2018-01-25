<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myCtrl">
 
{{myValue}}

</div>

<script>
var app = angular.module("myApp",[]);
app.controller("myCtrl", CtrlFunction);

function CtrlFunction ($scope, $q) {

  $scope.addOne = function(num) {
  
    var q = $q.defer();
    if (angular.isNumber(num)) {
      q.resolve(num + 1);
    }
    else {
      q.reject("NaN");
    }
    
    return q.promise;
  
  }

  $scope.myValue = 2;
  $scope.promise = $scope.addOne($scope.myValue);
  $scope.promise.then(
    function(v){$scope.myValue = v},
    function(err){$scope.myValue = err}
   );

}

/*function promiseFunction ($scope, $q) {

  $scope.addOne = function(num) {
  
    var q = $q.defer();
    if (angular.isNumber(num)) {
      q.resolve(num + 1);
    }
    else {
      q.reject("NaN");
    }
    
    return q.promise;
  
  } */









</script>
</body>
</html>
