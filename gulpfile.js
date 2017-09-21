var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var ngAnnotate = require('gulp-ng-annotate');
var minifyHtml = require("gulp-minify-html");
var deleteLines = require('gulp-delete-lines');
var replace = require('gulp-replace');
var del = require('del');

gulp.task('pack-html', function() {
	return gulp.src(['./popup.html','./background.html'])
		.pipe(replace('./node_modules/jquery/dist/jquery.min.js', './js/vendor.js'))
		.pipe(replace('./js/mundofunko-app.js', './js/mundofunko-ext.js'))
		.pipe(deleteLines({
			'filters': [
				/(<script\s+type=["']text\/javascript["']\s+src=".\/(node_modules\/|js\/mundofunko-c))+/i
			]
		}))
		.pipe(minifyHtml({
			empty: true,
			spare: true,
			quotes: true
		}))
		.pipe(gulp.dest('./build'));
});

gulp.task('pack-vendor', function() {
	return gulp.src([
			'./node_modules/jquery/dist/jquery.min.js',
			'./node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
			'./node_modules/angular/angular.min.js',
			'./node_modules/ngstorage/ngStorage.min.js',
			'./node_modules/ng-scrollbars/dist/scrollbars.min.js'
		])
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/js'));
});

gulp.task('lint', function() {
	return gulp.src([
			'./js/mundofunko-app.js',
			'./js/mundofunko-config.js',
			'./js/mundofunko-controller.js',
			'./js/mundofunko-controller-background.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('js',['lint'], function () {
	return gulp.src([
			'./js/mundofunko-app.js',
			'./js/mundofunko-config.js',
			'./js/mundofunko-controller.js',
			'./js/mundofunko-controller-background.js'])
		.pipe(concat('mundofunko-ext.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(gulp.dest("./build/js"));
});

gulp.task('pack-css', function () {
	return gulp.src([
			'./node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css',
			'./node_modules/font-awesome/css/font-awesome.min.css',
			'./css/style.css'
		])
		.pipe(concat('style.css'))
		.pipe(cleanCss())
		.pipe(gulp.dest('./build/css'));
});

gulp.task('fonts', function () {
	return gulp.src([
			'./node_modules/font-awesome/fonts/*',
			'./css/style.css'
		])
		.pipe(gulp.dest('./build/fonts'));
});

gulp.task('images', function() {
	return gulp.src('./img/*.png')
		.pipe(gulp.dest('./build/img'));
});

gulp.task('manifest', function() {
	return gulp.src('./manifest.json')
		.pipe(gulp.dest('./build'));
});

gulp.task('clean:build', function () {
	return del(['build/']);
});

gulp.task('default', gulpsync.sync([
	'clean:build',
	'pack-html',
	'pack-css',
	'pack-vendor',
	'js',
	'fonts',
	'images',
	'manifest']));