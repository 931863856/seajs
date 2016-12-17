//插件引入
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var combo = require('gulp-seajs-combo');
var runSequence = require('run-sequence');
 
//定义文件目录路径
var appDir = 'app';
var distDir = 'dist';

//js模块合并
gulp.task('js',function(){
    gulp.src('app/static/js/main.js')
        .pipe(combo({
            ignore: ['jquery']
        }))
        .pipe(gulp.dest('./dist/static/js'));
})

// 创建静态服务器
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: [distDir, appDir],
            index: 'html/test.html'
        }
    });
});

// 监听文件改变
gulp.task('watch' , function () {
    gulp.watch('app/static/js/application.js', ['js']); 
});

//任务的工作流启动
//step1 --build 生产目录 dist/
gulp.task('build', function(cb){
    runSequence('js' , cb);
});

//step2 --开启服务器，实时监听
 gulp.task('default', function(cb){ runSequence('server' , 'watch' , cb); });