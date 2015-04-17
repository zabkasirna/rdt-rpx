/** ------------------------------------------------------------------------- *\
 *  MODIFY AS YOU PLEASE
 ** ------------------------------------------------------------------------- */

var fs   = require('fs')
,   gutil = require('gulp-util')
,   packageConfig = require('../package.json');

var root = '.'
,   src = root + '/src'
,   dest = root + '/app'
;

var conf = {

    image: {
        src: src + '/asset/image/**/*.{png,jpg,svg,gif}',
        dest: dest + '/asset/image'
    },

    markup: {
        partial: {
            src: src + '/**/*.html',
            dest: dest
        }
    },

    vendor: {
        src: root + '/bower_components',
        dest: dest + '/script/vendor'
    },

    browserify: {
        // Enable source maps
        debug: true,
    
        // Additional file extentions to make optional
        extensions: ['.coffee', '.hbs'],

        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [
            {
                entries: src + '/script/index.js',
                dest: dest + '/script',
                outputName: 'app.js'
            }
        ]
    },

    style: {
        src: src + '/style/',
        dest: dest + '/style/'
    },

    font: {
        src: src + '/style/font/**/*.{ttf,woff,eot,svg,woff2}',
        dest: dest + '/style/font'
    }
};

module.exports = conf;