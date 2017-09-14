'use strict';


var store = {};
var actions = {};


var Entities = {
	User: {},
	Element: {},
	Component: {},
	ComponentLibrary: {},
	Symbol: {},
	Filter: {},
	Page: {},
	Document: {},
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
