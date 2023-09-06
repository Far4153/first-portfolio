const gulp = require('gulp');
const minifyCSS = require('gulp-clean-css');
const sass = require('gulp-sass'); // Import the gulp-sass plugin

// Define a task to minify CSS
gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});

// Define your SCSS compilation task
gulp.task('scssTask', () => {
  return gulp.src('src/scss/*.scss') // Source directory for your SCSS files
    .pipe(sass().on('error', sass.logError)) // Compile SCSS to CSS
    .pipe(gulp.dest('dist/css')); // Destination directory for the compiled CSS
});

// Define a default task that runs minify-css and scssTask
gulp.task('default', gulp.series('minify-css', 'scssTask'));
