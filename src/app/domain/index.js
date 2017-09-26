'use strict';


var store = {};
var actions = {};


var Entities = {
	User: {},
	Element: {
		component_id: '',
	},
	Component: {},
	ComponentLibrary: {},
	Symbol: {},
	Filter: {},
	Page: {},
	History: {},
	Document: {},
	Artboard: {}, // vs DocumentBoard vs Board
	Workspace: {}, // Container for Panels and Artboard
};


var Events = {
	MOVE_ELEMENT_XY: {},
	CROP_CANVAS_WIDTH_HEIGHT: {},
	ADD_USER_COMMENT: {},
	EDIT_USER_COMMENT: {},
	REMOVE_USER_COMMENT: {},
};


console.log(Entities, Events);


module.exports = {
	store: store,
	actions: actions,
};
