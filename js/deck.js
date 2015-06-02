var deckModule = angular.module("flash.controllers.deck", []);

deckModule.controller('DeckController',function($scope) {

  var allCards = [
    { front:"1 Red and invisible?",
      back:"2 No tomatoes"
    },
    { front:"3 beep",
      back:"4 boop"
    },
    { front:"5 full frontal",
      back:"6 back end"
    }
  ];

  var studyDeck;

  $scope.refreshStudyDeck = function () {
    studyDeck = [].concat(allCards);
    return studyDeck;
  };

  $scope.addCard = function (front,back) {
    var newCard = {front: front, back: back};
    allCards.push(newCard);
    studyDeck.push(newCard);
  };

})
