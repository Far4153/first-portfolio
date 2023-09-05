const gulp = require('gulp');
const minifyCSS = require('gulp-clean-css');

// Define a task to minify CSS
gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});

// Define a default task
gulp.task('default', gulp.series('minify-css'));

//gulp built task

exports.built = series(scssTask, jsTask);