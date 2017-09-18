var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('copyHTML', function(){
    return gulp.src('./source/**/*.html')
      .pipe(gulp.dest('./public/'))
});

gulp.task('copyimg', function(){
    return gulp.src('./source/img/**/*.png')
      .pipe(gulp.dest('./public/img'))
});

gulp.task('copyjs', function(){
    return gulp.src('./source/js/**/*.js')
      .pipe(gulp.dest('./public/js'))
});
 
gulp.task('sass', function () {
    var plugins = [
        autoprefixer({browsers: ['last 3 version', '> 5%', 'ie 8']})
    ];

    return gulp.src('./source/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss(plugins))
      .pipe(gulp.dest('./public/css'))
      .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
});


gulp.task('watch', function () {
    gulp.watch('./source/scss/**/*.scss', ['sass']);
    gulp.watch('./source/**/*.html', ['copyHTML']);
    gulp.watch('./source/**/*.js', ['copyjs']);
  });


gulp.task('default', ['copyHTML','copyimg','copyjs','sass','browser-sync','watch']);