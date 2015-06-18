visualization.directive('yahooStockQuoteDirective',['$http', 'YahooStockQuoteService',function($http, YahooStockQuoteService) {
    'use strict';
    return {
        restrict: 'EA',
        templateUrl: './components/YahooStockQuote/yahooStockQuoteView.html',
        scope: {},
        replace: true,
        controller: function(){

        },
        link: function (scope, element, attrs) {
            //scope.$watch($root.stockInfo)
            console.log(scope.$root.stockInfo);
            if(scope.$parent.$parent.$parent.stockQuote !== undefined) {

                YahooStockQuoteService.getYahooStockQuote(scope.$parent.$parent.$parent.stockQuote)
                    .then(function (data) {
                        scope.YSQ = data.data.query.results.quote;
                    });
            }
        }
    };
}]);