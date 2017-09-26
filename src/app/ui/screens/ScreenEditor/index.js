'use strict';


var m = require('mithril');
var Toolbar = require('./../../components/Toolbar');
var Artboard = require('./../../components/Artboard');
var Workspace = require('./../../components/Workspace');
var Panel = require('./../../components/Panel');
var PageLayers = require('./../../components/PageLayers');
var ElementProperties = require('./../../components/ElementProperties');


function view() {
	return m('div.Screen.ScreenEditor', [
		m(Workspace, [
			m(Artboard, { style: { left: '20%', width: '60%', }, }),
			m(Panel, { style: { height: '100%', left: '0', width: '20%', }, }, m(PageLayers)),
			m(Panel, { style: { height: '100%', right: '0', width: '20%', }, }, m(ElementProperties)),
		]),
		m(Toolbar),
	]);
}


module.exports = {
	view: view,
};
