'use strict';


var m = require('mithril');


function view(vnode) {
	return m('div.Workspace', vnode.attrs, vnode.children);
}


module.exports = {
	view: view,
};
