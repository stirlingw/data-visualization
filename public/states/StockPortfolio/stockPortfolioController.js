visualization.controller('StockPortfolioController', ['$scope', '$rootScope', 'StockPortfolioService', '$http',
    function($scope, $rootScope, MarkItService, $http) {
        'use strict';
        //Google Stock Quote
        $scope.GSQ = null;
        $scope.YSQ = null;
        $scope.YSN = null;
        $scope.symbolQuote = null;

    }
]);