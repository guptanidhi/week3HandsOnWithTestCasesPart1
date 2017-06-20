let expect = require('chai').expect;
let index = require('../output/w3q6');

describe('Question 6 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		var string = "gmail.com";
		var char = "m";
		expect(index(string, char)).to.deep.equal(2);
		done();
	})
})
