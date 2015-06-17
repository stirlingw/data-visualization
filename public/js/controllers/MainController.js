visualization.controller('MainController', ['$scope', '$rootScope', 'MarkItService', '$http',
    function($scope, $rootScope, MarkItService, $http) {
        'use strict';

        $scope.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];

        //Google Stock Quote
        $scope.GSQ = null;
        $scope.YSQ = null;
        $scope.YSN = null;
        $scope.symbolQuote = null;


        $scope.getStock = function(val) {
            var input = 'input='+val+'&callback=JSON_CALLBACK'
            return $http.jsonp('http://dev.markitondemand.com/api/v2/Lookup/jsonp?' + input).then(function(response){
                return response.data.map(function(item){
                    return {
                        label: item.Name + " - " + item.Symbol + " (" +item.Exchange+ ")",
                        name: item.Name,
                        symbol: item.Symbol,
                        exchange: item.Exchange
                    }
                });
            });
        };

        $scope.selectedStock = function(model){
            $scope.stockInfo = model;

            /*MarkItService.getStockQuote(model.symbol)
                .then(function(data){
                    $scope.symbolQuote = data.data;
                });*/
            MarkItService.getGoogleStockQuote(model.exchange, model.symbol)
                .then(function(data){
                    $scope.GSQ = data.data[0];
                });
            MarkItService.getYahooStockQuote(model.symbol)
                .then(function(data){
                    $scope.YSQ = data.data.query.results.quote;
                });

            MarkItService.getYahooStockNews(model.symbol)
                .then(function(data){
                    //console.log(data.data.query.results.a);
                    $scope.YSN = data.data.query.results.a;
                });

            MarkItService.getYahooStockChart(model.symbol)
                .then(function(data){
                    //console.log(data.data.query.results);
                    $scope.YSC = data.data.query.results.quote;
                });
        };
    }
]);