let expect = require('chai').expect;
let index = require('../output/w3q9');

describe('Question 9 - Test code for correct output', function(){
	const array = [40,50,20,60,70,80,30,10,85,35];
	const n = 50;
	it('Matches the desired output', function(done){
		expect(index(array, n)).to.deep.equal(295);
		done();
	})
})
