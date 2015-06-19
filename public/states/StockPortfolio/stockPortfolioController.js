visualization.controller('StockPortfolioController', ['$scope', '$rootScope', 'StockPortfolioService', '$http',
    function($scope, $rootScope, StockPortfolioService,   $http) {
        'use strict';
        //Google Stock Quote
        $scope.GSQ = null;
        $scope.YSQ = null;
        $scope.YSN = null;
        $scope.symbolQuote = null;

    }
]);