module.exports = function(grunt){

  grunt.registerTask('test', 'mochaTest: run unit tests', [
    'mochaTest:unit'
  ]);

  grunt.registerTask('test:xunit', 'mochaTest: run unit tests and generate report in xunit format on stdout', [
    'mochaTest:xunit'
  ]);

  grunt.registerTask('test:xunit-file', 'mochaTest: run unit tests and generate report in xunit format in file', [
    'mochaTest:xunit-file'
  ]);

  grunt.registerTask('test:sonar', 'mochaTest: run unit tests and generate report in xunit format for sonar', [
    'mochaTest:sonar'
  ]);

  var conf = require('../package.json');
  process.env.npm_package_config_mocha_sonar_reporter_testdir = conf.config['mocha-sonar-reporter'].testdir;

  return {
    unit: {
      options: {
        reporter: 'spec'
      },
      src: ['test/**/*.js']
    },
    xunit: {
      options: {
        reporter: 'xunit'
      },
      src: ['test/**/*.js']
    },
    'xunit-file': {
      options: {
        reporter: 'xunit-file'
      },
      src: ['test/**/*.js']
    },
    sonar: {
      options: {
        reporter: 'mocha-sonar-reporter',
        captureFile: 'TEST-all.xml'
      },
      src: ['test/**/*.js']
    }
  };
};
