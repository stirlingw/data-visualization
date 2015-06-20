visualization.service('StockQuoteService', ['$http','$q',
    function( $http, $q) {
        'use strict';
        var Service = {};
        Service.getStockQuote = function(symbol) {
            var input = 'input=' + symbol + '&callback=JSON_CALLBACK';
            var url = 'http://dev.markitondemand.com/api/v2/Lookup/jsonp?' + input;
            return $http.jsonp(url).success(function (response) {
                 return response.map(function (item) {
                     return {
                         label: item.Name + " - " + item.Symbol + " (" + item.Exchange + ")",
                         name: item.Name,
                         symbol: item.Symbol,
                         exchange: item.Exchange
                     }
                 });
            });
        };


        return Service;
    }
]);