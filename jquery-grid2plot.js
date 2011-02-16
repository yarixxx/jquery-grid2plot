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
        // One Line
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
            data = [data];
        // Multi Line (With Labels)
		} else {
			var rows = grid['rows'];
			var data = [];
			var p = 0;
			for (var key in rows[0]) {
				var label = grid['head'][p++];
                var list = _.map(rows, 
					function(row){
						return [row['date'], row[key]];
					}, key);
                data.push({'label': label, 'data': list});
			}
		}

        if (data) {
            $.plot(options.chart, data);
        }

	    return this;
	};
})(jQuery);
