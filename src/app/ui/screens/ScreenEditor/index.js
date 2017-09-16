'use strict';


var m = require('mithril');
var Toolbar = require('./../../components/Toolbar');
var Panel = require('./../../components/Panel');
var Artboard = require('./../../components/Artboard');


function view() {
	return m('div.Screen.ScreenEditor', [
		m(Artboard),
		m(Toolbar),
		m(Panel),
	]);
}


module.exports = {
	view: view,
};
