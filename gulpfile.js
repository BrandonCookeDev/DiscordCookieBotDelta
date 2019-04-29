const path = require('path')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const mocha = require('gulp-mocha')

const tsProd = ts.createProject('tsconfig.json')
const JS_DIR = path.join(__dirname, 'dist')
const TS_DIR = path.join(__dirname, 'src')
const TEST_DIR = path.join(JS_DIR, 'test')

function tsc(){
	return gulp.src(TS_DIR + '/**/*.ts')
		.pipe(tsProd())
		.pipe(gulp.dest(JS_DIR))
}

function test(){
	return gulp.src(TEST_DIR + '/**/*.test.js')
		.pipe(mocha())
}

function start(cb){
	cp.exec('npm start', function(err, stdout, stderr){
		if(err){
			console.error(err)
			process.exit(1)
			cb(err)
		}
		console.log(stdout)
		console.error(stderr)
		cb()
	})
}

exports.tsc = tsc
exports.test = gulp.series(tsc, test)
exports.start = gulp.series(tsc, start)