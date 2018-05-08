const gulp = require('gulp');
const browserSync = require('browser-sync');
const path = require('path');

const paths = {
    uipath: path.resolve(__dirname, 'public')
}

gulp.task('watch', () => {
    gulp.watch(paths.uipath + '/**', browserSync.reload);
});


gulp.task('default', ['watch'], () => {
    browserSync({
        server: {
            baseDir: paths.uipath
        }
    })
});