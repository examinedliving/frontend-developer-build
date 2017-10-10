// gulp task for less compiling

module.exports = function(gulp, $, config, tp) {
    var prefix = config.prefix;
    var production = config.env === 'production';
    var path = require('path');
    gulp.task('less', function() {
        return gulp.src(config.build.less.compile)
            .pipe(
                $.plumber({
                    errorHandler: config.onError
                }))
            .pipe($.preprocess(function() {
                config.uncache(config.build._scripts);
                var global = config.read(config.build.json.global);
                var scripts = require(config.build._scripts);
                var data = config.data;
                var obj = config.dash.extend({}, data, scripts, global);
                return {
                    context: obj
                };
            }()))
            .pipe($.less({
                    plugins: [prefix]
                })
                .on('error', function(err) {
                    this.emit('end');
                })
            )
            .pipe($.rename(config.build.output.css))
            .pipe($.prettify({
                config: path.join(config.config_root, '.jsbeautifyrc')
            }))
            .pipe($.debug())
            .pipe(gulp.dest(config.dist.assets.css));
    });
};