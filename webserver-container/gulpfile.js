var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('/output')
    .pipe(server({
      host: '0.0.0.0',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
