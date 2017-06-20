/*Q6:  Write a function that accepts two arguments, 
	a string and a letter and the function will count the number of occurrences 
	of the specified letter within the string.
	Sample arguments : 'gmail.com', 'm'
	Expected output : 2
*/

let q6 = function(string, character){
	var str = string || "Nidhi";
	var letter = character || "i";
	function char_count(str, letter)   
	{  
	 	var letter_Count = 0;  
	 	for (var position = 0; position < str.length; position++)   
	 	{  
	    if (str.charAt(position) == letter)   
      {  
      	letter_Count += 1;  
      }  
	  }  
	  return letter_Count;  
	}
	// console.log("String is "+str+" & character count for "+letter+" is "+char_count(str, letter));
	return char_count(str, letter);
}
q6();
module.exports = q6;