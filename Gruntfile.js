module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),

    concat : {
      //configure the concat task
      dist:{
        src: [
          'js/my_modules/*.js',
          'js/main.js'
        ],
        dest: 'prod/production.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);
}
