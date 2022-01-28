import svgSprite from 'gulp-svg-sprite'

export const sprite = () => {
  return app.gulp.src(app.path.src.sprite)
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../icons.svg`,
        }
      }
    }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream())
}