module.exports = function (grunt) {

	grunt.registerTask('sonar', 'generate xunit report and publish to sonar server', [
		'test:xunit-file',
		'sonarRunner:analysis'
	]);

	return {
		analysis: {
			options: {
				debug: true,
				separator: '\n',
				sonar: {
					host: {
						url: 'http://localhost:8999'
					},
					jdbc: {
						url: 'jdbc:mysql://localhost:3306/sonar',
						username: 'sonar',
						password: 'foobar'
					},

					projectKey: 'fw-admin',
					projectName: 'FooBar',
					projectVersion: '1.0',
					sources: ["src"].join(','),
					exclusions: "",
					test: ["test"].join(','),
					language: 'js',
					sourceEncoding: 'UTF-8',
					javascript: {
						jstest: {
							reportsPath: "."
						}
					}
				}
			}
		}
	};


};
