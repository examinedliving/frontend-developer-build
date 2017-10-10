var _scripts = {};

_scripts.self = function() {
	return this.NODE_ENV;
};

//#= Output Scripts, Fonts, Meta styles
_scripts.output = {};

//== local and vendor js
_scripts.output.vendorjs = function(min, _this) {
	var vendorlocal = 'vendorjs' + min;
	var vendorremote = 'vendorjs_remote' + min;
	var local = _this.assets[vendorlocal];
	var remote = _this.assets[vendorremote];
	var all = local.concat(remote);
	var str = '';
	all.forEach(function(script, index) {
		str = str + '<script src="' + script + '"></script>\n';
	});
	return str;
};

_scripts.output.angular = function(min, _this) {
	return '<script src="js/angular.min.js"></script>\n';
};

_scripts.output.jq = function(min, _this) {
	var jquerylocal = 'jquery' + min;
	var jqueryremote = 'jquery_remote' + min;
	var local = _this.assets[jquerylocal];
	var remote = _this.assets[jqueryremote];
	var output = '<script src="' + remote + '"></script>\n';
	output += '<!-- fallback in case we\'re offline -->';
	output += '<script>';
	output += 'if(typeof jQuery==="undefined"){';
	output += 'var scr=document.createElement("script");';
	output += 'scr.src="' + local + '";';
	output += 'document.head.appendChild(src);}';
	output += "</script>\n";
	return output;
};

_scripts.output.localjs = function(min, _this) {
	var scriptlocal = 'localjs' + min;
	var local = _this.assets[scriptlocal];
	var output = '';
	local.forEach(function(e) {
		output += '<script src="' + e + '"></script>\n';
	});
	return output;
};

//== local and vendor css and fonts
_scripts.output.vendorcss = function(min, _this) {
	var vendorlocal = 'vendorcss' + min;
	var vendorremote = 'vendorcss_remote' + min;
	var local = _this.assets[vendorlocal];
	var remote = _this.assets[vendorremote];
	var all = local.concat(remote);
	var str = '';
	all.forEach(function(style, index) {
		str = str + '<link href="' + style + '" rel="stylesheet" type="text/css">\n';
	});
	return str;
};

_scripts.output.localcss = function(min, _this) {
	var stylelocal = 'localcss' + min;
	var local = _this.assets[stylelocal];
	return '<link rel="stylesheet" type="text/css" href="' + local + '">\n';
};

_scripts.output.googleFonts = function(_this) {
	var fontStr = '';
	_this.assets.fonts.forEach(function(fontSrc, index) {
		fontStr += '<link rel="stylesheet" type="text/css" href="' + fontSrc + '">\n';
	});
	return fontStr;
};

//== metadata data - variables not functions

_scripts.output.meta_viewport = '<meta name="viewport" content="width=device-width, initial-scale=1">';

//== output scripts and styles
_scripts.output_scripts = function() {
	var min = this.NODE_ENV === "production" ? "_min" : "";
	var vendorjs = this.output.vendorjs(min, this);
	var localjs = this.output.localjs(min, this);
	var jq = this.output.jq(min, this);
	//var angular = this.output.angular(min, this);
	return jq + vendorjs + localjs;
};
_scripts.output_styles = function() {
	var min = this.NODE_ENV === "production" ? "_min" : "";
	var output = this.output.googleFonts(this) + this.output.vendorcss(min, this) + this.output.localcss(min, this);
	return output;
};

//== output header metadata - see under _scripts.output
_scripts.output_meta = function(meta) {
	this.dash = require('lodash');
	if (this.dash.isFunction(this.output['meta_' + meta])) {
		return this.output['meta_' + meta]();
	} else {
		return this.output['meta_' + meta];
	}
};

_scripts.global = function(args) {
	// pulls content from JSON and displays it allowing for random content and custom executable functions to build

	var content = this.contentData;
	var _args = Array.prototype.slice.call(arguments);
	var callback;
	if (_args[0] === 'exec') {
		_args.splice(0, 1);
		callback = _args.splice(0, 1);
		return this.global[callback].apply(globalContent, [_args]);
	}
	return this.global._get.apply(content, [args]);
};

_scripts.global._get = function(key) {
	return this[key];
};


module.exports = _scripts;