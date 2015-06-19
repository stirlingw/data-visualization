visualization.directive('googleStockQuoteDirective',['$http', 'GoogleStockQuoteService', 'StockQuoteService',function($http, GoogleStockQuoteService, StockQuoteService) {
    'use strict';
    return {
        restrict: 'E',
        templateUrl: './components/GoogleStockQuote/googleStockQuoteView.html',
        scope: {},
        replace: true,
        link: function (scope, element, attrs) {
            scope.$watch(function () {
                return StockQuoteService.getStockQuote();
            },
            function (quote) {
                if (quote !== null && typeof quote !== 'undefined') {
                    GoogleStockQuoteService.getGoogleStockQuote(quote.exchange, quote.symbol)
                        .then(function(data){
                            scope.GSQ = data.data[0];
                            console.log(scope.GSQ);
                        });
                }
            });
        }
    };
}]);