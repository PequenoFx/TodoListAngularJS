
var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
  $scope.products = [];
  $scope.addItem = function(){
    if(!$scope.item){return;}
      if($scope.products.indexOf($scope.item) == -1){
        $scope.products.push($scope.item);
      }else{
          $scope.errotext = 'Item ja existe.';
        }
  }

  $scope.removerItem = function(x){
    $scope.products.splice(x,1);
  }
      
});

