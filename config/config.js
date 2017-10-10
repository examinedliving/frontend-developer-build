module.exports = (function() {
	var jf = require("jsonfile"),
		read = jf.readFileSync,
		fs = require('fs'),
		path = require('path'),
		util = require('util'),
		dash = require('lodash');

	var config = read(__dirname + '/config.json');
	config.jf = jf;
	config.read = read;
	config.build._scripts = __dirname + '/data/functions.js';
	config.dash = dash;
	config._scripts = require(config.build._scripts);

	config.plugin_helpers = {};
	var pluginHelpers = path.join(__dirname, 'plugin-helpers');
	fs.readdirSync(pluginHelpers).forEach(function(file) {
		var requireFile = path.join(pluginHelpers, file);
		config.plugin_helpers[path.parse(file).name] = require(requireFile);
	});


	global.buildPaths = function(config, callbacks) {

		var dist = config.dist.root,
			build = config.build.root;
		var vendorjs = config.vendorjs,
			vendorless = config.vendorless;
		var js = config.js,
			less = config.less;

		/** #minimize ? **/
		var min = config.env === "production" ? ".min" : "";

		/** dist **/

		config.dist.assets = {
			css: config.dist.root + '/css',
			js: config.dist.root + '/js',
			img: config.dist.root + '/img'
		};


		/** build **/
		config.build.includes = build + '/includes';
		config.build.template = build + '/template';
		config.build.jsonpath = config.build.template + '/json';

		config.build.html = {};
		config.build.json = {};

		config.build.json.global = config.build.jsonpath + '/global.json';
		config.build.html.global = config.build.template + '/global/**/*.html';
		config.build.global_watch = [config.build.json.global, config.build.html.global, config.build._scripts];
		//#=== html
		config.build.html.strings = fs.readdirSync(config.build.template).filter(function(file, index) {
			return file.indexOf('.html') !== -1 && file.indexOf('global') === -1;
		}).map(function(file) {
			return file.toString().replace('.html', '');
		});
		// config.build.html.strings.forEach(function(file, index) {
		// 	var json = read(config.build.jsonpath + '/' + file + '.json');
		// 	var global = read(config.build.json.global);
		// 	var obj = ___.extend({}, global, config._scripts, json);
		// 	config.build.json[file] = obj;
		// });

		//#=== htaccess
		//	config.build.htaccess = {};
		//	config.build.htaccess.watch = build + '/includes/directives/**/*.*';
		//	config.build.htaccess.compile = build + '/htaccess.sh';

		//=== less
		// theme
		config.build.less = {};
		config.build.less.watch = build + '/less/source/**/*.less';
		config.build.less.shared = build + '/less/shared/**/*.less';
		config.build.less.compile = build + '/less/' + less + '.less';

		//= images
		config.build.img = {};
		config.build.img.watch = build + '/img/modified/**/*.*';

		//=== js
		// theme
		config.build.js = {};
		config.build.js.watch = build + '/js/source/**/*.js';
		config.build.js.compile = build + '/js/' + js + '.js';

		//=== vendor
		config.build.vendor = {};

		//= js

		config.build.vendor.js = {};
		config.build.vendor.js.watch = build + '/vendor/js/process/**/*.js';
		config.build.vendor.js.compile = build + '/vendor/' + vendorjs + min + '.js';

		//= less
		config.build.vendor.less = {};
		config.build.vendor.less.watch = build + '/vendor/less/**/*.less';
		config.build.vendor.less.compile = build + '/vendor/' + vendorless + '.less';



		/**  Output **/
		config.build.output = {};

		config.build.output = {};

		config.build.output.vendorjs = vendorjs + '.min.js';
		config.build.output.vendorless = vendorless + '.min' + '.css';

		config.build.output.css = less + min + '.css';
		config.build.output.js = js + min + '.js';
		config.build.output.htaccess = '.htaccess';

		if (typeof callbacks !== "undefined" && callbacks.length) {
			return global[callbacks.shift()](config, callbacks);
		} else {
			return config;
		}


	};

	global.loadData = function(config, callbacks) {

		exist = require('fs').existsSync;

		var vars = (exist(__dirname + '/vars.js')) ? require(__dirname + '/vars.js') : {};

		config.data = vars(config);

		if (typeof callbacks !== 'undefined' && callbacks.length) {

			return global[callbacks.shift()](config, callbacks);

		} else {

			return config;

		}

	};

	// callbacks is an array of callbacks to be passed sequentially in order
	var _module = function(config, callbacks) {
		if (config.env == "production") {
			process.NODE_ENV = 'production';
			config.NODE_ENV = 'production';
		}
		return global[callbacks.shift()](config, callbacks);

	};

	return _module(config, ['buildPaths', 'loadData']);

}());