'use strict'
//copy your api key in between the '' of the $apiKey = ''
var $apiEndpoint = 'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json',
    $apiKey = '6eb281c783msh2ec8dadfd731cc2p1168abjsnbe58b0facf73',
    $error_noData = 'Oops! No connection to the database.';
// initializes the Angular Module of our app
var pokemonApp = angular.module('pokemonApp',['ngRoute']);

// Configuration and routing
pokemonApp
    .config(['$httpProvider',
        function ($httpProvider) {

            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }
    ])
    .config(['$routeProvider',
        function ($routeProvider) {

            $routeProvider
                .when('/:page', {
                    controller: 'listController',
                    templateUrl: 'app/views/main.html'
                })
            $routeProvider.otherwise({ 'redirectTo': '/pokemon_stats' });
        }
    ]);

//const app = document.getElementById('root')

//const logo = document.createElement('img')
//logo.src = 'Content/images/MainLogo.PNG'


//const container = document.createElement('div')
//container.setAttribute('class', 'container')

//app.appendChild(logo)
//app.appendChild(container)

//var data = null;

//var request = new XMLHttpRequest(); 
//request.withCredentials = true;

//request.addEventListener("readystatechange", function () {
//    if (this.readyState === this.DONE) {
//        console.log(this.responseText);
//    }
//});

//request.open("GET", "")

//request.onload = function () {
//    // Begin accessing JSON data here
//    var data = JSON.parse(this.response)
//    if (request.status >= 200 && request.status < 400) {
//        data.forEach(pokemon => {
//            const card = document.createElement('div')
//            card.setAttribute('class', 'card')

//            const h1 = document.createElement('h1')
//            h1.textContent = pokemon.pokemon_name

//            const p = document.createElement('p')
//            p.textContent = 'Form: ' + pokemon.form

//            const p2 = document.createElement('p')
//            p2.textContent = 'Base Stamina: ' + pokemon.base_stamina

//            const p3 = document.createElement('p')
//            p3.textContent = 'Base Defense: '+ pokemon.base_defense

//            const p4 = document.createElement('p')
//            p4.textContent= 'Base Attack: ' + pokemon.base_attack


//            container.appendChild(card)
//            card.appendChild(h1)
//            card.appendChild(p)
//            card.appendChild(p2)
//            card.appendChild(p3)
//            card.appendChild(p4)
//        })
//    } else {
//        const errorMessage = document.createElement('marquee')
//        errorMessage.textContent = `Not working!`
//        app.appendChild(errorMessage)
//    }
//}

//request.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
//request.setRequestHeader("x-rapidapi-key", "6eb281c783msh2ec8dadfd731cc2p1168abjsnbe58b0facf73");

//request.send(data);




