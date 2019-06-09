'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./lmmc/css/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./lmmc/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./lmmc/css/*.scss', ['sass']);
});