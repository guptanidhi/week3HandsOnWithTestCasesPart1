let expect = require('chai').expect;
let index = require('../output/w3q7');

describe('Question 7 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		var array = [50,50,50,50,50];
		expect(index(array)).to.deep.equal(250);
		done();
	})
})
