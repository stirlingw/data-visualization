visualization.directive('googleStockQuoteDirective',['$http', 'GoogleStockQuoteService', 'SuperModelService',function($http, GoogleStockQuoteService, SuperModelService) {
    'use strict';
    return {
        restrict: 'E',
        templateUrl: './components/GoogleStockQuote/googleStockQuoteView.html',
        scope: {},
        replace: true,
        link: function (scope, element, attrs) {
            scope.$watch(function () {
                return SuperModelService.getStockQuote();
            },
            function (quote) {
                if (quote !== null && typeof quote !== 'undefined') {
                    GoogleStockQuoteService.getGoogleStockQuote(quote.exchange, quote.symbol)
                        .then(function(data){
                            scope.GSQ = data.data[0];
                        });
                }
            });
        }
    };
}]);