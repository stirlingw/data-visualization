visualization.service('GoogleStockQuoteService', ['$http',
    function($http) {
        'use strict';
        var Service = {};

        Service.getGoogleStockQuote = function(exchange, symbol) {
            var url = "http://finance.google.com/finance/info?client=ig&q="+ exchange +":"+ symbol +"&callback=JSON_CALLBACK";
            var promise = $http.jsonp(url)
                .success(function(data){
                    return data;
                }).error(function(data, status) {
                    console.info(data);
                });
            return promise;
        };

        return Service;
    }
]);