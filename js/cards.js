var cardModule = angular.module("flash.cards", []);

 cardModule.controller('CardsController',function ($scope) {
   $scope.addCard = function() {
     $scope.$parent.addCard($scope.front, $scope.back);
     $scope.front= '';
     $scope.back= '';
   };
});
