'use strict';

var JSZip = require('jszip');
var FileSaver = require('./../FileSaver');


function saveAsZip(documentFileContents) {
	var zip = new JSZip();

	zip.file('Hello.txt', 'Hello World\n');

	var assets = zip.folder('assets');
	assets.file('index.json', JSON.stringify(documentFileContents, null, ''));

	// var img = zip.folder("images");
	// img.file("smile.gif", imgData, { base64: true });

	zip.generateAsync({ type: 'blob', }).then(function (content) {
		// see FileSaver.js
		FileSaver(content, 'example.zip');
	});
}


module.exports = {
	saveAsZip: saveAsZip,
};
