sonar-js-mocha-xunit
====================
Sample project to test Sonar analysis of Unit Test reports on a Javascript project using Mocha and xunit format.

Pre requisite:
Have npm and grunt-cli installed

Installation:
npm install

Configuration:
You may edit your sonar server configuration in grunt/sonar.js file.

Running
XUNIT_FILE=TEST-xunit.xml grunt sonar

You can run simple tests without publishing on Sonar with:
grunt test:xunit-file # generate xunit file (xunit.xml)
grunt test:xunit # generate xunit data on stdout
grunt test:sonar # generate xunit data with unique classname for Sonar
