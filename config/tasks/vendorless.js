/**
 *
 * gulp - less-vendor task
 * handles vendor less files
 * filename:  vendorless.js
 *
 */

module.exports = function(gulp, $, config, tp) {
    var prefix = config.prefix;
    var production = config.env === 'production';

    gulp.task('vendorless', function() {
        return gulp.src(config.build.vendor.less.compile)
            .pipe($.plumber({
                inherit: true,
                errorHandler: config.onError
            }))
            .pipe($.less({
                    plugins: [prefix]
                })
                .on('error', function(err) {
                    this.emit('end');
                })
            )
            .pipe($.minify())
            .pipe($.rename(config.build.output.vendorless))
            .pipe($.debug())
            .pipe(gulp.dest(config.dist.assets.css));
    });
};