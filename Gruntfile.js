module.exports = function (grunt) {

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		mochaTest: require('./grunt/mochaTest')(grunt),
		sonarRunner: require('./grunt/sonar')(grunt)
	});


	// defaults
	grunt.registerTask('default', ['sonar']);
};

