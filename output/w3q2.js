/*Q2:  Write a  function that returns a passed string with letters in alphabetical order?
 	Example string : 'webmaster'
	Output : 'abeemrstw'
*/

let q2 = function(string){
	var str = string || "webmaster";
	function charInOrder(str)
	{
		return str.split('').sort().join('');
	}
	// console.log("Input String - ", str);
	// console.log("Output String - ",charInOrder(str));
	return charInOrder(str);
}
q2();
module.exports = q2;