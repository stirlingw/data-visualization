visualization.directive('GoogleStockQuoteDirective',['$http', 'GoogleStockQuoteService',function($http, YahooStockQuoteService) {
    'use strict';
    return {
        restrict: 'E',
        templateUrl: './components/GoogleStockQuote/googleStockQuoteView.html',
        scope: {},
        replace: true,
        controller: function(){},
        link: function (scope, element, attrs) {
            //scope.$watch($root.stockInfo)
            console.log(scope.$root.stockInfo);
            if(scope.$parent.$parent.$parent.stockQuote !== undefined) {
                GoogleStockQuoteService.getGoogleStockQuote(model.exchange, model.symbol)
                    .then(function(data){
                        $scope.GSQ = data.data[0];
                    });
            }
        }
    };
}]);