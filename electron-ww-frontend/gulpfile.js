const gulp = require('gulp')
const shell = require('shelljs')
gulp.task('default', function () {
    var watcher = gulp.watch(['window/main.js', 'window/**/*.js', 'window/**/*.html', 'window/**/*.css'])
    watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        process.exit()
        setTimeout(() => {
            shell.exec('npm start')
        }, 5000)
    })
});
