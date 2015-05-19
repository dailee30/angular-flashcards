var flashApp = angular.module("flash", []);
flashApp.controller("CardController", function($scope){
  $scope.cards = [
    {front: "how many licks?",
     back: "50"
    },
    {front: "beep beep",
     back: "who got the key to the jeep"
    },
    {front: "without me",
     back: "there would just be aweso"
   }
  ];
  $scope.current = 0;
  $scope.front = true;

  $scope.next = function() {
    var move = +(!$scope.front); //change cards if on back
    var numCards = $scope.cards.length;

    $scope.current = ($scope.current + move) % numCards;
    $scope.front = !$scope.front;
  };

});
