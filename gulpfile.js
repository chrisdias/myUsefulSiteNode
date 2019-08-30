const gulp = require('gulp');
const less = require('gulp-less');

// Where your Less files are located
const srcDir = './styles';
// Where your CSS files will be generated
const dstDir = './public/stylesheets';

gulp.task('less', function () {
    gulp
        .src(`${srcDir}/*.less`)
        .pipe(less())
        .pipe(gulp.dest(dstDir));
});

gulp.task('default', ['less'], function () {
    gulp.watch(`${srcDir}/*.less`, ['less']);
});

const eslint = require('gulp-eslint');

gulp.task('lint', function () {
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

