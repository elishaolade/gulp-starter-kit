var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("./sass/*.sass", gulp.parallel('sass'));
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
});

/* Compiles sass files in sass directory */
/* Change to desired CSS Preprocessor */
gulp.task('sass', function() {
    return gulp.src("./sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

// gulp.task('default', ['serve']);
