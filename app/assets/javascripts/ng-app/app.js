var Grub = angular.module('Grub', ['ngAnimate','ui.router','templates']);

    Grub.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        /* Route and States */
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'LoginCtrl'
        })
        .state('home.sign-in', { // nested list with custom controller
            url: '/sign-in',
            templateUrl: 'sign-in.html'
        })
        .state('home.sign-up', { // nested list with just some random string data
            url: '/sign-up',
            templateUrl: 'sign-up.html'
        });

        $urlRouterProvider.otherwise('/home'); // default fallback route
        $locationProvider.html5Mode({ // enable HTML5 mode for SEO
          enabled: true,
          requireBase: false
        });
    });