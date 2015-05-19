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
     back: "life has less color"
   }
  ];
});
