'use strict';


var m = require('mithril');


// var xmlString = '<root></root>';
// var parser = new DOMParser();
// var documentFileContents = parser.parseFromString(xmlString, 'text/xml');
var documentFileContents = {
	id: '357a67b9-8db1-48e0-862a-e9011adcbc34',
	meta: {
		file_version: '0.0.1',
		layout: {
			grid: {
				breakpoints: [],
			},
		},
	},
	pages: [
		{
			id: '717fef59-40d7-4b86-bcab-3ae2bd19f00e',
			name: 'Page 1',
			props: {
				backgroundColor: '#0f0',
			},
			elements: [
				{
					id: 'd165e907-49e6-416a-afc7-3d14f7168f09',
					style: {
						background: 'url("http://gdj.graphicdesignjunction.com/wp-content/uploads/2014/03/0012_sign_in_app_design.jpg") no-repeat center center',
						backgroundSize: 'cover',
						border: '1px solid #000',
						height: '284px',
						left: '360px',
						transform: 'perspective(160px) skewX(-5deg) rotateX(5deg) rotateY(-2deg) rotateZ(35deg)',
						// transform: 'perspective(160px) rotateX(5deg) rotateY(-2deg) rotateZ(35deg)',
						position: 'absolute',
						top: '100px',
						width: '160px',
					},
				},
				{
					id: 'asdf',
					style: {
						filter: 'blur(2px)',
					},
					yield: 'Helkjashdfk h',
				},
			],
		},
	],
};


console.log('documentFileContents', documentFileContents);


// var keyIncrease = [17, 61,];
// var keyDecrease = [17, 173,];
// var keyDefault = [17, 48,];
var keyIncrease = [91, 187,];
var keyDecrease = [91, 189,];
var keyDefault = [91, 48,];

var listenMultiKeypress = function (keys, callback) {
	var keyOn = [];
	for (var i = 0; i < keys.length; i++) {
		keyOn[i] = false;
	}
	document.addEventListener('keydown', function (e) {
		var keyCode = e.which;
		console.log(keyCode);
		var idx = keys.indexOf(keyCode);
		if (idx !== -1) {
			keyOn[idx] = true;
		}
		// console.log(keyOn);
		for (var i = 0; i < keyOn.length; i++) {
			if (!keyOn[i]) {
				return;
			}
		}
		setTimeout(callback, 100);
	});
	document.addEventListener('keyup', function (e) {
		var keyCode = e.which;
		var idx = keys.indexOf(keyCode);
		if (idx !== -1) {
			keyOn[idx] = false;
		}
		// console.log(keyOn);
	});
};
var previousScale = 1;
// var previousDevicePixelRatio;
var neutralizeZoom = function () {
	var bodyTag = document.getElementsByTagName('body')[0];
	console.log(previousScale, window.devicePixelRatio, bodyTag.style);
	// //alert('caught');
	// var scale = 1 / window.devicePixelRatio;

	// document.body.style.transform = 'scale(' + (1 / previousScale) + ')';
	// document.body.style.transform = 'scale(' + scale + ')';
	// var widthDiff = parseInt(getComputedStyle(window.document.body).width) * (scale - 1);
	// var heightDiff = parseInt(getComputedStyle(window.document.body).height) * (scale - 1);
	// document.body.style.left = widthDiff / 2 + 'px';
	// document.body.style.top = heightDiff / 2 + 'px';
	// previousScale = scale;
};


function getElementIdFromEvent(e) {
	return e.currentTarget.id;
}


function createElementStateObject(vnode, id) {
	vnode.state.elements[id] = {};
	return vnode.state.elements[id];
}


function getElementStateObject(vnode, id) {
	if (vnode.state.elements[id]) {
		return vnode.state.elements[id];
	}

	return createElementStateObject(vnode, id);
}


function setActiveElement(vnode, id) {
	vnode.state.activeElement = getElementStateObject(vnode, id);
}


function onElementPointerDown(vnode, e) {
	console.log('onElementDragStart()');
	setActiveElement(vnode, getElementIdFromEvent(e));
	vnode.state.activeElement.isDragging = true;
}


function onElementPointerMove() {
	// var elementStateObject = getElementStateObject(vnode, getElementIdFromEvent(e));
	// if (getElementStateObject(vnode, getElementIdFromEvent(e)).isDragging) {

	// }
}


function onElementPointerUp(vnode, e) {
	getElementStateObject(vnode, getElementIdFromEvent(e)).isDragging = false;
}


function getDraggableListenersAsAttributesObject(vnode) {
	return {
		onmousedown: onElementPointerDown.bind(null, vnode),
		onmousemove: onElementPointerMove.bind(null, vnode),
		onmouseup: onElementPointerUp.bind(null, vnode),
	};
}


function combineObjects(obj1, obj2) {
	return Object.assign(obj1, obj2);
}


function oninit(vnode) {
	vnode.state = {
		zoom: 1,
		activeElement: null,
		elements: {},
	};

	documentFileContents.pages[0].elements.map(function (element) {
		vnode.state.elements[element.id] = element;
	});
}

function oncreate() {
	listenMultiKeypress(keyIncrease, neutralizeZoom);
	listenMultiKeypress(keyDecrease, neutralizeZoom);
	listenMultiKeypress(keyDefault, neutralizeZoom);
	neutralizeZoom();
}


function view(vnode) {
	return m('div.Artboard',
		{
			style: { transform: 'scale(' + vnode.state.zoom + ')', },
		},
		[
			m('h1', 'Artboard'),
			m('pre', JSON.stringify(vnode.state, null, 2)),
			m('div.elements', documentFileContents.pages[0].elements.map(function (element) {
				return m('div.element',
					combineObjects(
						getDraggableListenersAsAttributesObject(vnode),
						{
							id: element.id,
							style: element.style,
						}
					), element.yield
				);
			})),
			// m('div', [
			// 	m('div.child',
			// 		combineObjects(getDraggableListenersAsAttributesObject(vnode), {
			// 			id: 'asdf-1',
			// 			style: {
			// 				background: 'url("http://gdj.graphicdesignjunction.com/wp-content/uploads/2014/03/0012_sign_in_app_design.jpg") no-repeat center center',
			// 				// background: 'url("/Screen Shot 2017-09-15 at 18.17.49.png") no-repeat center center',
			// 				backgroundSize: 'cover',
			// 				border: '1px solid #f00',
			// 				height: '284px',
			// 				left: '360px',
			// 				transform: 'perspective(160px) rotateX(5deg) rotateY(-2deg) rotateZ(35deg)',
			// 				position: 'absolute',
			// 				top: '100px',
			// 				width: '160px',
			// 			},
			// 		})
			// 	),
			// ]),
		]);
}


module.exports = {
	oninit: oninit,
	oncreate: oncreate,
	view: view,
};
