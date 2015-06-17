/**
 * Created by swaite on 6/16/15.
 */

visualization.controller('MainController', ['$scope', '$rootScope', 'MarkItService', '$http',
    function($scope, $rootScope, MarkItService, $http) {
        'use strict';

//https://developer.yahoo.com/yql/console/?q=select%20*%20from%20html%20where%20url%3D%27http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3DGOOGL%27%20and%20xpath%3D%27%2F%2Fdiv%5B%40id%3D%22yfi_headlines%22%5D%2Fdiv%5B2%5D%2Ful%2Fli%2Fa%27&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys#h=select+*+from+yahoo.finance.quote+where+symbol+in+(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)
//https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=


    }
]);