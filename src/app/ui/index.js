'use strict';


var m = require('mithril');


var LayoutDefault = require('./layouts/LayoutDefault');
var ScreenEditor = require('./screens/ScreenEditor');


function doLayout(layout, screen) {
	return {
		render: function () {
			return m(layout, m(screen));
		},
	};
}


function getRoutes() {
	return {
		'/': doLayout(LayoutDefault, ScreenEditor),
	};
}


function init() {
	m.route.prefix('#!');
	m.route(document.getElementById('app'), '/', getRoutes());
}


init();
