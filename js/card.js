var cardModule = angular.module("flash.controllers.card", []);

 ctrlModule.controller('CardsController',function ($scope) {
   $scope.addCard = function() {
     $scope.$parent.addCard($scope.front, $scope.back);
     $scope.front= '';
     $scope.back= '';
     };
});