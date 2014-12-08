
var expect = require('chai').expect;
var bar = require('../src/toto/bar.js');

describe('Bar', function() {
	describe('#salut', function() {
		it('should return salut $name', function() {

			var response = bar.salut('toto');

			expect(response).is.equal('Salut toto');

		})
	})
});