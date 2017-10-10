/**
 * gulp html task
 * @author Daniel Gombert, examined.living@gmail.com
 */

module.exports = function(gulp, $, config, tp) {
	var path = require('path');
	config.build.html.strings.forEach(function(file) {
		var htmlFile = config.build.root + '/' + file + '.html';
		gulp.task(file + '-html', function(g) {
			return gulp.src(htmlFile)
				.pipe($.preprocess(function() {
					config.uncache(config.build._scripts);
					var data = config.data;
					var json = config.read(config.build.jsonpath + '/' + file + '.json');
					var global = config.read(config.build.json.global);
					var scripts = require(config.build._scripts);
					var obj = config.dash.extend({}, data, global, scripts, json);
					return {
						context: obj
					};
				}()))
				.pipe($.prettify({
					config: path.join(config.config_root, '.jsbeautifyrc')
				}))
				.pipe(gulp.dest(config.dist.root));
		});
	});
};