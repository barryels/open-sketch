'use strict';


var m = require('mithril');
var Toolbar = require('./../../components/Toolbar');
var Artboard = require('./../../components/Artboard');
var Panel = require('./../../components/Panel');
var PageLayers = require('./../../components/PageLayers');
var ElementProperties = require('./../../components/ElementProperties');


function view() {
	return m('div.Screen.ScreenEditor', [
		m(Artboard),
		m(Toolbar),
		m(Panel, { style: { right: '20px', top: '10%', }, }, m(PageLayers)),
		m(Panel, { style: { left: '20px', top: '10%', }, }, m(ElementProperties)),
	]);
}


module.exports = {
	view: view,
};
