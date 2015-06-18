visualization.directive('yahooStockNewsDirective',['$http', 'YahooStockQuoteService',function($http, YahooStockQuoteService) {
    'use strict';
    return {
        restrict: 'E',
        templateUrl: './components/YahooStockNews/yahooStockNewsView.html',
        scope: {},
        replace: true,
        controller: function(){},
        link: function (scope, element, attrs) {
            //scope.$watch($root.stockInfo)
            console.log(scope.$root.stockInfo);
            if(scope.$parent.$parent.$parent.stockQuote !== undefined) {
                MarkItService.getYahooStockNews(model.symbol)
                    .then(function(data){
                        //console.log(data.data.query.results.a);
                        $scope.YSN = data.data.query.results.a;
                    });
            }
        }
    };
}]);