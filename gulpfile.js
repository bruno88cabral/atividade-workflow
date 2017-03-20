var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

gulp.task('sass', function () {
 return gulp.src('source/scss/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('dist/css'));
});
 
gulp.task('html', function() {
  return gulp.src('source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
	gulp.watch('source/scss/*.scss',['sass'])
	gulp.watch('source/*.html',['html'])
});

gulp.task('default',['sass','html','watch']);