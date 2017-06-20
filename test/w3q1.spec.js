let expect = require('chai').expect;
let index = require('../output/w3q1');

describe('Question 1 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		var string = "This is local text document.";
		expect(index).to.deep.equal(string);
		done();
	})
})
