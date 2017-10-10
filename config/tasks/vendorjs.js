/**
 *
 * gulp - js vendor task
 * concats and compiles main vendor js file
 * filename:  vendorjs.js
 *
 */

module.exports = function(gulp, $, config, tp) {
	var production = config.env === "production";

	gulp.task('vendorjs', function() {

		return gulp.src(config.build.vendor.js.compile)
			.pipe($.plumber({
				errorHandler: config.onError
			}))
			.pipe($.preprocess({
				context: config.data
			}))
			.pipe($.uglify())
			.pipe($.rename(config.build.output.vendorjs))
			.pipe($.debug())
			.pipe(gulp.dest(config.dist.assets.js));

	});
};