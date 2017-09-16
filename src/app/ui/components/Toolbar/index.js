'use strict';


var m = require('mithril');


function view() {
	return m('div.Toolbar', [
		m('h1', 'Toolbar'),
	]);
}


module.exports = {
	view: view,
};
