<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myCtrl">
 
<ul>
<li ng-repeat="names in persons">
{{persons}}
</li>
</ul> 

</div>


<script>
var app = angular.module("myApp",[]);
app.controller("myCtrl", Ctrlfunction);

Ctrlfunction.$inject = ['$scope', '$http'];
function Ctrlfunction ($scope, $http) {
  $http.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(
   function success(response) {
     $scope.persons = response.data;
   },
   function error(response) {
     $scope.persons = "error try again";
   });
 };

</script>
</body>
</html>
