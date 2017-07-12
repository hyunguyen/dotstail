var gulp = require('gulp');
var sass = require('gulp-sass');

var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');

var htmlbeautify = require('gulp-html-beautify');
var gulp_file_include = require('gulp-file-include');
var browser_sync = require('browser-sync').create();

// SYNC html
gulp.task('include-html', function(){
    var options = {
        "indent_size": 4
    };
    gulp.src([
        './html/*.html'
    ])
    .pipe(gulp_file_include())
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./public'))
    .pipe(browser_sync.stream());
});

// SYNC sass
gulp.task('sass', function(){
    gulp.src(['./sass/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./public/theme/css'))
    .pipe(browser_sync.stream());
});

// SYNC js
gulp.task('js', function(){
    gulp.src([
        './theme/js/dotstail.js'
    ])
    .pipe(concat('dotstail.min.js'))
    .pipe(jsmin())
    .pipe(gulp.dest('./public/theme/js'));
});


// COPY images
gulp.task('copy-img', function(){
    gulp.src([
        './theme/images/**/*.png',
        './theme/images/**/*.jpg',
        './theme/images/**/*.gif'
    ])
    .pipe(gulp.dest('./public/theme/images'));
});

gulp.task("Sync", ['include-html', 'sass', 'js'], function(){
    browser_sync.init({
        server: {
            baseDir: "./public"
        }
    });
    gulp.watch(['./html/**/*.html',], ['include-html']);
    gulp.watch(['./sass/**/*.scss'], ['sass']);
    gulp.watch(['./theme/js/*.js'], ['js']);
})

gulp.task('default', ['Sync', 'copy-img']);