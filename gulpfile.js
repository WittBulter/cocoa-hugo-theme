const gulp = require('gulp')
const gulpless = require('gulp-less')
const cleancss = require('gulp-clean-css')
const concatCss = require('gulp-concat-css')
const htmlmin = require('gulp-htmlmin')

const less = () => gulp.src([
  './dev/less/reset.less',
  './dev/less/pygments.less',
  './dev/less/main.less',
])
  .pipe(gulpless())
  .pipe(concatCss('bundle.css'))
  .pipe(cleancss())
  .pipe(gulp.dest('./static/css'))

const html = () => gulp.src(['./dev/layouts/**/*.html'])
  .pipe(htmlmin({
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    decodeEntities: true,
    removeComments: true,
    removeCommentsFromCDATA: true,
    keepClosingSlash: true,
    ignoreCustomFragments: [/{{[\s\S]*?}}/]
  }))
  .pipe(gulp.dest('./layouts'))

// exports.watch = gulp.watch(['./dev/less/*.less'],less)
exports.default = gulp.series(less, html)
