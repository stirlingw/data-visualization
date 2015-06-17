visualization.service('MarkItService', ['$http','$q',
    function( $http, $q) {
        'use strict';
        var Service = {};

        Service.getMarkItOnDemand = function(symbol) {
            //http://dev.markitondemand.com/Api/v2/Quote/jsonp
            var url = "http://dev.markitondemand.com/Api/v2/Lookup/jsonp?input="+ symbol +"&callback=JSON_CALLBACK";
            var promise = $http.jsonp(url)
                .success(function(data){
                    return data;
                }).error(function(data, status) {
                    console.info(data);
                });
            return promise;
        };

        Service.getStockQuote = function(symbol) {
            var url = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol="+ symbol +"&callback=JSON_CALLBACK";
            var promise = $http.jsonp(url)
                .success(function(data){
                    return data;
                }).error(function(data, status) {
                    console.info(data);
                });
            return promise;
        };

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

        Service.getYahooStockQuote = function(symbol) {
            var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22"+symbol+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK";
            var promise = $http.jsonp(url)
                .success(function(data){
                    return data;
                }).error(function(data, status) {
                    console.info(data);
                });
            return promise;
        };

        Service.getYahooStockNews = function(symbol){
            var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3D"+symbol+"'%20and%20xpath%3D'%2F%2Fdiv%5B%40id%3D%22yfi_headlines%22%5D%2Fdiv%5B2%5D%2Ful%2Fli%2Fa'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK";
            var promise = $http.jsonp(url)
                .success(function(data){
                    return data;
                }).error(function(data, status) {
                    console.info(data);
                });
            return promise;
        };

        Service.getYahooStockChart = function(symbol){
            var start_date = '2009-09-11';
            var end_date = '2010-03-10';
            var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20%3D%20%22"+symbol+"%22%20and%20startDate%20%3D%20%22"+start_date+"%22%20and%20endDate%20%3D%20%22"+end_date+"%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK";
            var promise = $http.jsonp(url)
                .success(function(data){
                    return data;
                }).error(function(data, status) {
                    console.info(data);
                });
            return promise;
        }



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
        }


        return Service;
    }
]);
