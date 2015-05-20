var flashApp = angular.module("flash", []);
flashApp.controller("CardController", function($scope){
  $scope.cards = [
    {front: "F 1",
     back: "B 1"
    },
    {front: "F 2",
     back: "B 2"
    },
    {front: "F 3",
     back: "B 3"
   }
  ];
  $scope.current = 0;
  $scope.front = true;
  // $scope.back = false;

  $scope.next = function() {
    var move = +(!$scope.front); //change cards if on back
    var numCards = $scope.cards.length;

    $scope.current = ($scope.current + move) % numCards;
    $scope.front = !$scope.front;
  };

  $scope.back = function() {
    var move = -($scope.front); //change cards if on back
    var numCards = $scope.cards.length;

    $scope.current = (($scope.current || numCards) - move) % numCards;
    $scope.front = !$scope.front;
  };

});

// OR
$scope.next = function(){
  var step = =(!$scope.front); // change cards if on back
  $scope.move(step);
}

$scope.back = function(){
  var step = -($scope.front); //change card if on front
}

$scope.move = function(step){ // step is 0,1,-1
  var numCards = $scope.cards.length;
  $scope.current = ($scope.current + step + numCards) % numCards;
  $scope.front = !$scope.front;
}
});
