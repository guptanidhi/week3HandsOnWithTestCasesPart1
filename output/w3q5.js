/*Q5:  Write a filter function to read this array of names 
	`["Harry", "Shearly", "Houston", "Daniel", "Popoyee", "Henry", "Fiona", "Ewqsel"]` 
	to perform the following action
	a. Print only those names whose third letter is ‘n’ and sixth letter is ‘l’.
	b. Print all those names whose names starts with H.’
	c. Make sure to have the function calls so as to filter names according to needs.
	Output: [ [ 'Shearly', 'Daniel', 'ewqsel' ],  [ 'Harry', 'Houston', 'Henry' ] ]
*/

var names = ["Harry", "Shearly", "Houston", "Daniel", "Popoyee", "Henry", "Fiona", "ewqsel"];
let q5 = {         
	findNames: function(arrayOfNames, index, letter) {
    var names = arrayOfNames.filter(function(word) {
     return word[index] === letter;
    });
    return names 
	},
	 
	thirdCharNsixthCharl: function(arrayOfNames){
		var names = arrayOfNames.filter(function(word){
			return word[2] === "n" && word[5] === "l";
		})
		// console.log("Names with 3rd letter n and 6th letter l", names);
		return names;
	},
	 
	namesStartsWithH: function(arrayOfNames){
		var names = arrayOfNames.filter(function(word){
			return word[0] === "H";
		})
		// console.log("Names starts with H", names);
		return names;
	}
	 
	// var result = [ findNames(names, 2, 'A') && findNames(names, 5, 'l'), findNames(names, 0, 'H')];
	// console.log("Desired Output: ",result);
}
module.exports = q5;