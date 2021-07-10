const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const minifyImg = require('gulp-imagemin');
const minifyJS = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');


gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost/default-template"
    });

});

gulp.task('css', () => {
	return gulp.src('assets/scss/**/*.scss')
		.pipe(sass({
			outputStyle: 'nested',
			precision: 10,
			includePaths: ['.']
		}).on('error', sass.logError))
		.pipe(minifyCSS())
		.pipe(autoprefixer())
		.pipe(concat('../dist/projectName.min.css'))
		.pipe(gulp.dest('assets'))
		.pipe(browserSync.stream());
});

gulp.task('js', () => {

	return gulp.src(['assets/js/theme.js'])
		.pipe(concat('../dist/projectName.min.js'))
		.pipe(minifyJS())
		.pipe(gulp.dest('assets'))
		.pipe(browserSync.stream());
});

gulp.task('html', () => {
	gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());
});

gulp.task('img', () => {
	gulp.src('src/img/**/*')
		.pipe(minifyImg())
		.pipe(gulp.dest('dist/img'));
});

gulp.task('delete', () => del(['dist/css', 'dist/js', 'dist/img', 'dist/**/*.html']));

gulp.task('watch', () => {
	gulp.watch("assets/scss/**/*.scss", gulp.task('css'));
	gulp.watch("assets/js/**/*.js", gulp.task('js'));
	gulp.watch("assets/img/**/*.img", gulp.task('img'));
});

gulp.task('default', gulp.series('delete', gulp.parallel('html', 'css', 'js', 'img', 'browser-sync', 'watch')));
