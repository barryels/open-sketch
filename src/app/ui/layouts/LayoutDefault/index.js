'use strict';


var m = require('mithril');


var name = 'LayoutDefault';
var className = '.Layout.' + name;


function view(vnode) {
	return m('div' + className, vnode.children);
}


module.exports = {
	view: view,
};
