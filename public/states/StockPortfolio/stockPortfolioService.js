visualization.service('StockPortfolioService', ['$http','$q',
    function( $http, $q) {
        'use strict';
        var Service = {};

        //https://developer.yahoo.com/yql/console/?q=select%20*%20from%20html%20where%20url%3D%27http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3DGOOGL%27%20and%20xpath%3D%27%2F%2Fdiv%5B%40id%3D%22yfi_headlines%22%5D%2Fdiv%5B2%5D%2Ful%2Fli%2Fa%27&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys#h=select+*+from+yahoo.finance.quote+where+symbol+in+(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)
        //https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=

        Service.getStockPortfolio = function(){



            var stockPortfolio = {
                port_name: 'New Portfolio',
                id: 1,
                stocks: [
                    {
                        name: "Google Inc.",
                        symbol: "GOOGL",
                        exchange: "NASDAQ",
                        purchased_value: "14.523",
                        current_value: "124.25",
                        shares: 10000
                    },
                    {
                        name: "Twitter, Inc. ",
                        symbol: "TWTR",
                        exchange: "NYSE",
                        purchased_value: "21.22",
                        current_value: "35.88",
                        shares: 5000
                    },
                    {
                        name: "The Rubicon Project, Inc.",
                        symbol: "RUBI",
                        exchange: "NYSE",
                        purchased_value: "21.22",
                        current_value: "35.88",
                        shares: 5000
                    }
                ]
            };

            var spSum = function(){
                return _.sum(_(stockPortfolio.stocks)
                    .pluck('shares')
                    .value());
            };
            stockPortfolio.shareSum = spSum();

            return stockPortfolio;
        };

        return Service;
    }
]);