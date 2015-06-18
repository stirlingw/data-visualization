visualization.service('StockQuoteService', ['$http','$q',
    function( $http, $q) {
        'use strict';
        var Service = {};

        Service.getTypeAhead = function(val){
            var input = 'input='+val+'&callback=JSON_CALLBACK';
            var promise = $http.jsonp('http://dev.markitondemand.com/api/v2/Lookup/jsonp?' + input)
                .success(function(response){
                    return response;
                })
                .error(function(data){
                    console.info(data);
                });
            return promise;
        };


        return Service;
    }
]);