let expect = require('chai').expect;
let index = require('../output/w3q8');

describe('Question 8 - Test code for correct output', function(){
	
	it('Matches the desired output', function(done){
		expect(index(37)).to.deep.equal(true);
		done();
	})

	it('Matches the desired output', function(done){
		expect(index(36)).to.deep.equal(false);
		done();
	})
})
