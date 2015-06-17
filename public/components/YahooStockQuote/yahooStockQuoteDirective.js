visualization.
    directive('yahooStockQuoteDirective', function ($http) {
        return {
            restrict: 'E',
            templateUrl: 'yahooStockQuoteView.html',
            transclude: true,
            link: function (scope, element, attrs) {


            }
        };
    });