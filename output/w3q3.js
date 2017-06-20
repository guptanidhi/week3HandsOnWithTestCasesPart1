/*Q3:  Write a function to find the `greatest common divisior (GCD)` between two numbers.
*/

let q3 = function(number1, number2){
	function greatestCommonDivisor(a, b) {
	  if (!b) {
	    return a;
	  }
	  return greatestCommonDivisor(b, a % b);
	};
	const x = (number1 == undefined)? 7 : number1;
	const y = (number2 == undefined)? 49: number2;
	var greatestCommonDivisor = greatestCommonDivisor(x, y);
	// console.log("Greatest common divisor between "+x+" & "+y+" is "+greatestCommonDivisor);
	return greatestCommonDivisor;
}
q3();
module.exports = q3;