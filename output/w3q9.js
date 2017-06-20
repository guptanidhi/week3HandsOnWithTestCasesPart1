/*Q9:  Create a program to accept an array of `size 10` and `a number`, 
  create a function `TOTAL` that returns the sum of values in an array 
  that is greater than  number accepted 
  Input :  40,50,20,60,70,80,30,10,85,35        n=50
  Output : 295
*/

const array = [40,50,20,60,70,80,30,10,85,35];
const n = 50;
let arrayTotalGreaterThanN = function(numberArray, number){
  var total = 0;
  for(var i=0;i<numberArray.length;i++){
    if(numberArray[i] > number){
      total += numberArray[i];
    }
  }
  return total;
}
// console.log(arrayTotalGreaterThanN(array, n));
arrayTotalGreaterThanN(array, n);
module.exports = arrayTotalGreaterThanN;