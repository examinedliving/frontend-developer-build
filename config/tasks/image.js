/**
 *
 * gulp - image task
 * copy's images to dist directory
 * filename:  image.js
 *
 */


module.exports = function(gulp, $, config, tp) {

	gulp.task('img', function() {
		return gulp.src(config.build.img.watch)
			.pipe($.changed(config.dist.assets.img))
			.pipe(gulp.dest(config.dist.assets.img));
	});
};