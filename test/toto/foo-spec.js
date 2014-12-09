
var expect = require('chai').expect;
var foo = require('../../src/foo.js');

describe('Foo', function() {
	describe('#hello', function() {
		it('should return hello $name', function() {

			var response = foo.hello('toto');

			expect(response).is.equal('Hello toto');

		})
	})
});