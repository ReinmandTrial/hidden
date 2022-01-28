import webpack from 'webpack-stream';

export const scripts = () => {
  return app.gulp.src(app.path.src.scripts, { sourcemaps: app.isDev })
    .pipe(webpack({
      mode: app.isBuild ? 'production' : 'development',
      mode: 'development',
      output: {
        filename: 'app.min.js'
      }
    }))
    .pipe(app.gulp.dest(app.path.build.scripts))
    .pipe(app.plugins.browsersync.stream())
}