let expect = require('chai').expect;
let index = require('../output/w3q5');

describe('Question 5 - Test code for correct output', function(){
	var names = ["Harry", "Shearly", "Houston", "Daniel", "Popoyee", "Henry", "Fiona", "ewqsel"];

	it('Matches the desired output', function(done){
		expect(index.thirdCharNsixthCharl(names)).to.deep.equal([ 'Daniel' ]);
		done();
	})

	it('Matches the desired output', function(done){
		expect(index.namesStartsWithH(names)).to.deep.equal([ 'Harry', 'Houston', 'Henry' ]);
		done();
	})

	it('Matches the desired output', function(done){
		var result = [ index.findNames(names, 2, 'A') && index.findNames(names, 5, 'l'), index.findNames(names, 0, 'H')];
		expect(result).to.deep.equal([ [ 'Shearly', 'Daniel', 'ewqsel' ],  [ 'Harry', 'Houston', 'Henry' ] ]);
		done();
	})
})
