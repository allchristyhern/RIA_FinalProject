
pokemonApp.controller('listController', ['$scope', '$http',
    function ($scope, $http) {
        var $apiEndpoint = 'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json',
            $apiHost = 'pokemon-go1.p.rapidapi.com',
            $apiKey = '6eb281c783msh2ec8dadfd731cc2p1168abjsnbe58b0facf73';
        $scope.pokemonsList = [];

        $scope.getPokemonsList = function () {

            var $responsePromise;
            // Get data from API
            $responsePromise = $http({
                method: 'GET',
                url: $apiEndpoint,
                contenttype: 'application/json',
                headers: {
                    'x-rapidapi-host': $apiHost,
                    'x-rapidapi-key': $apiKey,
                }
            })
            // Process requests
            $responsePromise.then(
                 function successCallback(response) {
                    $scope.pokemonList = response.data;
                 }, 
              
            );
        };
        // Calling the function
        $scope.getPokemonsList();
    }
    
])