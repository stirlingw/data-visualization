'use strict';
visualization.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainController'
        });
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);

}]);