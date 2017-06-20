/*Q1:  Write a JavaScript program that stores basic information like your Name, 
	Company Name and Designation in variable and 
	print the same on console as 
	“My Name is {name} I work in {company name} and my Designation is {designation}”.
*/

var fs = require('fs'), filename = "./data.txt";
var fileOutput = fs.readFileSync(filename, 'utf8', function(err, data) {
  if (err) throw err;
  return data;
});
// console.log(fileOutput)
module.exports = fileOutput;