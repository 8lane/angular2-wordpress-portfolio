import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {join} from 'path';
import {APP_SRC} from '../../config';
const plugins = <any>gulpLoadPlugins();

export = function buildSassDev() {
  return function() {
    return gulp.src(join(APP_SRC, '**', '*.scss'))
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(APP_SRC));
  };
}
