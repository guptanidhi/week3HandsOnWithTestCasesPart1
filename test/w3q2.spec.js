let expect = require('chai').expect;
let index = require('../output/w3q2');

describe('Question 2 - Test code for correct output', function(){
	it('Matches the desired output', function(done){
		var string = "beilmo";
		expect(index("mobile")).to.deep.equal(string);
		done();
	})
})
