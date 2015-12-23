module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-html-snapshot');

  grunt.initConfig({
    htmlSnapshot: {
      all: {
        options: {
          snapshotPath: 'snapshots/',
          sitePath: 'http://angular.demo.local/',
          fileNamePrefix: 'sp_',
          msWaitForPages: 10000,
          urls: ['', 'about', 'contact']
        }
      }
    }
  });

  grunt.registerTask('default', ['htmlSnapshot']);
};
