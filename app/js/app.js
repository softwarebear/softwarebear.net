(function(){'use strict';

angular
.module('swb.app', ['ngRoute', 'smartAdmin', 'swb.constants', 'swb.controllers'])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'swb.controller.home',
    });

    $routeProvider.when('/angular', {
        templateUrl: 'templates/angular.html',
        controller: 'swb.controller.angular'
    });

    $routeProvider.otherwise({redirectTo: 'home'});
}]);

})();