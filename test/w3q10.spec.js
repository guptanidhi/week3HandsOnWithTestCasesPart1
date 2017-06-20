let expect = require('chai').expect;
let index = require('../output/w3q10');

describe('Question 10 - Test code for correct output', function(){
	const inputDate1 = new Date("01-Oct-2016");
	const inputDate2 = new Date("05-Oct-2016");

	it('Matches the desired output', function(done){
		expect(index(inputDate1)).to.deep.equal("30-Sep-2016");
		done();
	})

	it('Matches the desired output', function(done){
		expect(index(inputDate2)).to.deep.equal("31-Oct-2016");
		done();
	})
})
