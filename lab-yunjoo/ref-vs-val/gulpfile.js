const gulp = require('gulp');
const eslint = require('gulp-eslint');
gulp.task('lint',function(){
  return gulp.src(['index.js', 'lib/*.js'])
  .pipe(eslint()).pipe(eslint.format()
});
gulp.task('default', ['lint']);
