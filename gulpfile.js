const gulp = require('gulp')
const tsc = require('gulp-typescript')

const tsProd = ts.createProject('tsconfig.json')

function tsc(){
	return gulp.src(TS_DIR + '/**/*.ts')
		.pipe(tsProd())
		.pipe(gulp.dest(JS_DIR))
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
exports.start = gulp.series(tsc, start)