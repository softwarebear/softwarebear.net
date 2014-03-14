(function(){'use strict';

angular
.module('swb.app', ['ngRoute', 'swb.controllers'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'swb.controller.home'
    });

    $routeProvider.when('/angular', {
        templateUrl: 'templates/angular.html',
        controller: 'swb.controller.angular'
    });

    $routeProvider.otherwise({redirectTo: 'home'});
}]);

})();