/**
 * watch.js
 * gulp task for watching files and processing as needed
 * @author Daniel Gombert, <examined.living@gmail.com>
 * ===
 */

module.exports = function(gulp, $, config, tp) {
	var path = require('path');
	gulp.task('watch', function() {
		gulp.watch(config.build.js.watch, ['js']);
		gulp.watch(config.build.vendor.js.watch, ['vendorjs']);
		gulp.watch(config.build.less.watch, ['less']);
		gulp.watch(config.build.less.shared, ['less', 'vendorless']);
		gulp.watch(config.build.vendor.less.watch, ['vendorless']);
		gulp.watch(config.build.global_watch, ['index-html']);

		gulp.watch(config.build.img.watch, ['img']);

		config.build.html.strings.forEach(function(file) {
			var files = [config.build.template + '/' + file + '.html', config.build.template + '/' + file + '/**/*.*', config.build.jsonpath + '/' + file + '.json'];
			var task = file + '-html';
			gulp.watch(files, [task]);
		});
	});
	return gulp;
};