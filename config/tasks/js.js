/**
 *
 * gulp - js task
 * concats and compiles main js file
 * filename:  js.js
 *
 */


module.exports = function(gulp, $, config, tp) {

	var production = config.production;
	var path = require('path');
	gulp.task('js', function() {
		return gulp.src(config.build.js.compile)
			.pipe($.plumber({
				errorHandler: config.onError
			}))
			.pipe($.preprocess(function() {
				config.uncache(config.build._scripts);
				var global = config.read(config.build.json.global);
				var scripts = require(config.build._scripts);
				var data = config.data;
				var obj = config.dash.extend({}, scripts, data, global);
				return {
					context: obj
				};
			}()))
			.pipe($.cond(production, $.uglify(), $.util.noop()))
			.pipe($.rename(config.build.output.js))
			.pipe($.prettify({
				config: path.join(config.config_root, '.jsbeautifyrc')
			}))
			.pipe($.debug())
			.pipe(gulp.dest(config.dist.assets.js));

	});
};