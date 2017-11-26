<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myCtrl">
<input type="text" ng-model = "ObjectList[0].number"><br>
<input type="text" ng-model = "newitemName" placeholder = "itemName">
<input type="text" ng-model = "newitemNumber" placeholder = "itemNumber"><br>
<button ng-click = "additem()">Add Item</button>
<ul>
 <li ng-repeat = "x in ObjectList"> 
 {{$index + 1}}. {{x.name}} - {{x.number}}</li>
 
</ul>
<ul>
 <li ng-repeat = "x in numberArray">{{x}}</li>
 <li ng-repeat = "x in newNumberArray">{{x}}</li>
 </ul>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', MyControllerFunction);

function MyControllerFunction($scope) {
    $scope.NameList = ['Brad', 'Chad'];
    $scope.ObjectList = [ 
    {
    name: 'car',
    number: "1"
    },
    
    {
    name: 'plane',
    number: '2'
    }    
    ];
    
    $scope.additem = function() {
     var newItem = {
       name: $scope.newitemName,
       number: $scope.newitemNumber
     };
     
     $scope.ObjectList.push(newItem);
    };
    
    function aboveFour (value) {
      return value > 4;
    };
    $scope.numberArray = [1,2,3,4,5,6,7,8,9];
    $scope.newNumberArray = numberArray.filter(aboveFour);
   
    
    
};
</script>
</body>
</html>
