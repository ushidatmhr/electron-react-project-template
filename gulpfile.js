const gulp = require('gulp');
const babel = require('gulp-babel');


const jsx = {
    src: './src/app.jsx',
    dest: './app/'
}

/**
 * jsxコンパイルタスク
 */
gulp.task('babel', function () {
    gulp.src(jsx.src)
        .pipe(babel())
        .pipe(gulp.dest(jsx.dest))
});


/**
 * watchタスク
 */
gulp.task('watch', function () {
    gulp.watch(jsx.src, ['babel']);
});


/**
 * デフォルトタスク
 */
gulp.task('default', ['babel', 'watch']);