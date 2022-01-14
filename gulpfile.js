const gulp = require('gulp')
const jsonlint = require("gulp-jsonlint")
const log = require('fancy-log')

const myCustomReporter = (file) => {
    log('File ' + file.path + ' is not valid JSON.')
}

const checkjson = () => {
    return gulp.src('./src/*.json')
        .pipe(jsonlint())
        .pipe(jsonlint.reporter(myCustomReporter))
}

exports.checkjson = checkjson
exports.default = checkjson