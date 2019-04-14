//
// Assets Optimization
//
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');

const util = require('util');
const path = require('path');

const maxAllowedWidth = 1024;
const jsFiles = [
	'./overview/*.js',
	'./common/js/app.js',
	'./common/js/lib/stats.js'
];
const cssFiles = [
	'./overview/*.css',
	'./projects/project.css',
	'./writeups/writeup.css',
	'./collaboration/collaboration.css'
];

const imageFiles = [
	'./overview/images/*',
	'./projects/images/*',
	'./common/images/*'
]

function minAsset(files, minifyFn) {
	gulp.src(files, { base: './' })
		.pipe(minifyFn())
		.pipe(rename( function (filepath) {
			filepath.basename += '.min'
		}))
	.pipe(gulp.dest('.'))
}

gulp.task('minjs', function (done) {
	minAsset(jsFiles, uglify)
	done();
});

gulp.task('mincss', function (done) {
	minAsset(cssFiles, cssnano)
	done();
});

gulp.task('minimg', function (done) {
	gulp.src(files, { base: './' })
		.pipe(imageResize({
			width: maxAllowedWidth,
			upscale: false
		}))
		.pipe(imagemin())
		.pipe(rename( function (filepath) {
			filepath.basename += '.min'
		}))
		.pipe(gulp.dest('.'))
});

gulp.task('default', gulp.series([
	'minjs',
	'minimg',
	'mincss'
]))