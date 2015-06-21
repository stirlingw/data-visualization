visualization.service('GoogleStockQuoteService', ['$http',
    function($http) {
        'use strict';
        var Service = {};

        Service.getGoogleStockQuote = function(exchange, symbol) {
            if(exchange !== undefined){
                var url = "http://finance.google.com/finance/info?client=ig&q="+ exchange +":"+ symbol +"&callback=JSON_CALLBACK";
                var callback = $http.jsonp(url);
                return callback;
            }
            console.log('it got here');
            //return Stock;
        };

        /*Service.setStock = function(model) {
            if(model.exchange !== undefined){
                var url = "http://finance.google.com/finance/info?client=ig&q="+model.exchange +":"+ model.symbol +"&callback=JSON_CALLBACK";
                var callback = $http.jsonp(url)
                    .success(function(data){
                        //scope.GSQ = data[0];
                        Stock = data[0];
                    });
            }
        };*/

        return Service;
    }
]);