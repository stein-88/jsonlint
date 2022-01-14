const gulp = require('gulp')
const jsonlint = require("gulp-jsonlint")
const log = require('fancy-log')

const myCustomReporter = (file) => {
    log('File ' + file.path + ' is not valid JSON.')
}

gulp.task('default', () => {
    return gulp.src('./src/*.json')
        .pipe(jsonlint())
        .pipe(jsonlint.reporter(myCustomReporter))
})