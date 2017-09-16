'use strict';


var m = require('mithril');


function view() {
	return m('div.Panel', [
		m('h1', 'Panel'),
	]);
}


module.exports = {
	view: view,
};
