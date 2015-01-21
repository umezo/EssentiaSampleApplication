module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    browserSync: {
      bsFiles: {
        src : 'index.html'
      },
      options: {
        server: {
          baseDir: "./"
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-browser-sync');


};


