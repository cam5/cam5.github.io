const { src, dest, series } = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const globalConfig = {
  css:     'css',
  sass:    '_sass',
  js:      '_js',
  js_dest: 'js',
  npm:     'node_modules',
};


function scripts(cb) {
  src([
      globalConfig.npm + '/uikit/dist/js/core/core.js',
      globalConfig.npm + '/uikit/dist/js/core/touch.js',
      globalConfig.npm + '/uikit/dist/js/core/utility.js',
      globalConfig.npm + '/uikit/dist/js/core/smooth-scroll.js',
      globalConfig.npm + '/uikit/dist/js/core/scrollspy.js',
      globalConfig.npm + '/uikit/dist/js/core/toggle.js',
      globalConfig.npm + '/uikit/dist/js/core/alert.js',
      globalConfig.npm + '/uikit/dist/js/core/button.js',
      globalConfig.npm + '/uikit/dist/js/core/dropdown.js',
      globalConfig.npm + '/uikit/dist/js/core/grid.js',
      globalConfig.npm + '/uikit/dist/js/core/modal.js',
      globalConfig.npm + '/uikit/dist/js/core/nav.js',
      globalConfig.npm + '/uikit/dist/js/core/offcanvas.js',
      globalConfig.npm + '/uikit/dist/js/core/switcher.js',
      globalConfig.npm + '/uikit/dist/js/core/tab.js',
      globalConfig.npm + '/uikit/dist/js/core/cover.js',
      globalConfig.npm + '/uikit/dist/js/components/sticky.js',
      globalConfig.npm + '/uikit/dist/js/components/slideshow.js',
      globalConfig.npm + '/uikit/dist/js/components/datepicker.js',
      globalConfig.npm + '/uikit/dist/js/components/tooltip.js',
      globalConfig.npm + '/uikit/dist/js/components/slider.js',
      globalConfig.js + '/plugins.js',
      globalConfig.js + '/main.js'
    ])
    .pipe(concat('ch.js'))
    .pipe(uglify())
    .pipe(dest(globalConfig.js_dest));

  cb();
};

exports.scripts = scripts;
