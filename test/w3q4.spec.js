let expect = require('chai').expect;
let index = require('../output/w3q4');

describe('Question 4 - Test code for correct output', function(){
	
	it('friendsName is a type of string', function(done){
			expect(index).to.be.a('string');
			done();
	})

	it('friendsName should not be undefined', function(done){
		expect(index).to.not.equal(undefined);
		done();
	})

	it('friendsName should not be empty', function(done){
		expect(index).to.not.equal('');
		done();
	})

})
