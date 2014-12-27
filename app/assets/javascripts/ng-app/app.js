angular.module('Grub', ['ngAnimate','ui.router','templates'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        /* Route and States */
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        });

        $urlRouterProvider.otherwise('/'); // default fallback route
        $locationProvider.html5Mode({ // enable HTML5 mode for SEO
          enabled: true,
          requireBase: false
        });
    });