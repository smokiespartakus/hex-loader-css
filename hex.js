function tplHexLoader(size, color) {
	var $load = $('<div />').addClass('hexagon_spinner');
	if (size) $load.addClass(size);
	if (color) $load.addClass(color);
	for (var i=1; i<7; i++) {
		$load.append($('<div />').addClass('trapez trapez_' + i));
	}
	return $load;
}