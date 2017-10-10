/**
 *
 * js variables for defining project specific details, e.g. script srcs, link href paths,etc
 * location: /.config/vars.js
 *
 */

function setThemeData(config) {
	return {

		"author": "Daniel Gombert",
		"author_email": "examined.living@gmail.com",
		"env": config.env

	};
}

function getGlobalJSON(config) {
	return config.read(config.build.json.global).data;
}


//== Globally (within build process) defined variables for building
function init(config) {

	var obj = {};
	obj.theme = setThemeData(config);
	return obj;
}

//== return modified data object
module.exports = init;