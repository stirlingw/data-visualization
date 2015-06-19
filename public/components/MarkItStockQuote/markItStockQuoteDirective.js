visualization.directive('markItStockQuoteDirective',['$http', 'MarkItStockQuoteService',function($http, MarkItStockQuoteService) {
    'use strict';
    return {
        restrict: 'E',
        templateUrl: './components/MarkItStockQuote/markItStockQuoteView.html',
        scope: {},
        replace: true,
        controller: function(){},
        link: function (scope, element, attrs) {
            //scope.$watch($root.stockInfo)
            //console.log(scope.$root.stockInfo);
            //if(scope.$parent.$parent.$parent.stockQuote !== undefined) {
                /*MarkItStockQuoteService.getMarkItStockQuote(model.exchange, model.symbol)
                    .then(function(data){
                        $scope.GSQ = data.data[0];
                    });*/
            //}
        }
    };
}]);