/*Q7:  Write a program to calculate the sum of the elements in an array 
	using function and return the total to the main function, and print it.
*/

var array = [40,9,78,23,90];

let q7 = function(array){
	var totalOfArray = 0;
	for(var i=0;i<array.length;i++){
		totalOfArray += array[i];
	}
	// console.log(totalOfArray);
	return totalOfArray;
}
q7(array);
module.exports = q7;