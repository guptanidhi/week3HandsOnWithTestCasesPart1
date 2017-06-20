let expect = require('chai').expect;
let index = require('../output/w3q3');

describe('Question 3 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		expect(index(6,48)).to.deep.equal(6);
		done();
	})

	it('Matches the desired output', function(done){
		expect(index(6,0)).to.deep.equal(6);
		done();
	})

	it('Matches the desired output', function(done){
		expect(index(0,8)).to.deep.equal(8);
		done();
	})

})
