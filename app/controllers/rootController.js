'use strict';
// defining a root controller
pokemonApp.controller('RootController', ['$scope',
    // defining function in scope 
    function ($scope) {
        $scope.appTitle = 'PokemonApp';
    }
]);