var gulp =require('gulp');
var uglify = require('gulp-uglify');
var SCRIPTS_PATH = 'public/scripts/**/*.js';


gulp.task('styles',function(){
    console.log('Styles task in progress');
});

gulp.task('scripts',function(){
    console.log('Scripts are in progress');

    return gulp.src(SCRIPTS_PATH)
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'));
});

gulp.task('images',function(){
    console.log('images task in progress');
});

gulp.task('watch',function(){
    console.log('Starting server in watch mode');
    require('./server.js');
    gulp.watch(SCRIPTS_PATH,['scripts'])
})


gulp.task('default',function(){
    console.log('Default gulp task in progress');
});