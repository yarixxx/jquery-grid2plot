(function($){ 
	$.fn.grid2plot = function(options) {
		var defaults = {  
		   length: 300,  
		};  
		var options = $.extend(defaults, options);

	    var grid = [];
    	grid['head'] = this.jqGrid('getGridParam', 'colNames');
	    grid['rows'] = this.jqGrid('getRowData');

		var gridSize = 0;
		for (var key in grid['head']) {
			gridSize++;
		}

        var data;
        // Easyest case
		if (2 == gridSize) {
		    var data = [];
			var rows = grid['rows'];
		    for (var row in rows) {
                var item = [];
                for (var cell in rows[row]) {
                    item.push(rows[row][cell]);
                }
		        data.push(item);
   			}
		}
        if (data) {
            $.plot(options.chart, [data]);
        }

	    return this;
	};
})(jQuery);
