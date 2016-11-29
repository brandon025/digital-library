'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    
    RestangularProvider.setBaseUrl('http://localhost:3000');
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl',
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl',
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl',
      })
      .when('/games', {
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl',
      })
      .when('/games', {
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl',
        controllerAs: 'games'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  
  .factory('MovieRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Movie', function(MovieRestangular) {
    return MovieRestangular.service('movie');
  })

  .directive('youtube', function(){
    return {
    restrict: 'E',
        scope: {
          src: '='
        },
        templateUrl: 'views/youtube.html'
      };
    })

    //nontrusted urls; youtube
    //take that url and trust it as a trusted resource
   .filter('trusted', function ($sce) {
      return function(url) {
        var url = url.replace("watch?v=", "v/");
        return $sce.trustAsResourceUrl(url);
      };
    });

