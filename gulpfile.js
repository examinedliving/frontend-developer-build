/**
 *
 * gulpfile.js
 * Template for handling multiple build configurations with the
 * same gulpfile and structure
 *
 *
 */

var gulp = require('gulp');
var config = require('./config/config.js');
config.production = config.env === 'production';
if (config.production) {
	process.env.NODE_ENV = 'production';
} else {
	process.env.NODE_ENV = 'development';
}

config.onError = function(e) {
	console.dir(e);
};

config.uncache = function(module) {
	delete require.cache[require.resolve(module)];
}

var LessPluginPrefix = require('less-plugin-autoprefix');

config.prefix = new LessPluginPrefix({

	browsers: config.gulp.autoprefix_arguments

});

var $ = require('gulp-load-plugins')({
	rename: config.gulp.plugin_renames,
});

/*** Tasks Go in here ***/

require('gulp-autoload-tasks')(gulp, $, config, config.gulp.tasks_path);
gulp.task('default', ['watch']);

/*** End Of Tasks ***/

module.exports = gulp;