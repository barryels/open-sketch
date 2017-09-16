'use strict';


var m = require('mithril');


function view(vnode) {
	return m('div.Panel', vnode.attrs, vnode.children);
}


module.exports = {
	view: view,
};
