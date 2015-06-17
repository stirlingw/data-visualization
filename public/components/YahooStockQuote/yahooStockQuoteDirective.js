visualization.
    directive('yahooStockQuoteDirective', function ($http, YahooStockQuoteService) {
        return {
            restrict: 'EA',
            template: "<div id='chart'></div>",
            link: function (scope, element, attrs) {
                //http://codepen.io/basemoz/pen/dxGHu?editors=011

                var handleThen = function(newData, status) {
                    console.log(newData);
                    if(newData.data.query.results !== null) {
                        var data = newData.data.query.results.quote;
                        var parseDate = d3.time.format("%Y-%m-%d").parse;

                        data.forEach(function (d) {
                            d.Date = parseDate(d.Date);
                            d.Close = +d.Close;
                        });

                        var margin = {top: 30, right: 20, bottom: 30, left: 50},
                            width = 600 - margin.left - margin.right,
                            height = 270 - margin.top - margin.bottom;

                        var x = d3.time.scale().range([0, width]);
                        var y = d3.scale.linear().range([height, 0]);

                        // Scale the range of the data

                        x.domain(d3.extent(data, function (d) {
                            return d.Date;
                        }));
                        y.domain([0, d3.max(data, function (d) {
                            return d.Close;
                        })]);

                        var xAxis = d3.svg.axis().scale(x)
                            .orient("bottom").ticks(5);

                        var yAxis = d3.svg.axis().scale(y)
                            .orient("left").ticks(5);

                        var svg = d3.select("#chart")
                            .append("svg")
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top + margin.bottom)
                            .append("g")
                            .attr("transform", "translate(" + margin.left + "," + margin.top + ")"
                        );

                        // 转换成直线path可用的坐标
                        var valueline = d3.svg.line()
                            .x(function (d) {
                                return x(d.Date);
                            })
                            .y(function (d) {
                                return y(d.Close);
                            });

                        svg.append("path")		// Add the valueline path.
                            .attr("d", valueline(data));

                        svg.append("g")			// Add the X Axis
                            .attr("class", "x axis")
                            .attr("transform", "translate(0," + height + ")")
                            .call(xAxis);

                        svg.append("g")			// Add the Y Axis
                            .attr("class", "y axis")
                            .call(yAxis);
                    }
                };
                if(attrs.symbol !== null) {
                    //attrs.symbol.toString()
                    YahooStockQuoteService.getYahooStockChart('GOOGL', '2009-09-11', '2010-03-10').then(handleThen);
                }
            }
        };
    });