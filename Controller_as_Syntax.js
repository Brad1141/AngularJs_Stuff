<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="ParentController as ParentCtrl">
{{ ParentCtrl.parentvalue }}
<div ng-controller="ChildController as ChildCtrl">
{{ ChildCtrl.childvalue }}
</div>

</div>

<script>
var app = angular.module("myApp",[]);
app.controller("ParentController", ParentController)
   .controller("ChildController", ChildController);
   
function ParentController () {
  var ParentCtrl = this;
  ParentCtrl.parentvalue = "parent";
}

function ChildController () {
  var ChildCtrl = this;
  ChildCtrl.childvalue = "child";
}

</script>
</body>
</html>
