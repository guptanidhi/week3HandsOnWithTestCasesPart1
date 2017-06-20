/*Q8:  Create a function named `primeCheck`, 
	which receives an integer number and 
	returns true if it is prime, or false if it is not.
*/

let testPrime = function(n){
  if (n===1){
    return false;
  }else if(n === 2){
    return true;
  }else{
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
  }
}
// console.log("Is 37 prime number - ",testPrime(37));
testPrime(37);
module.exports = testPrime;