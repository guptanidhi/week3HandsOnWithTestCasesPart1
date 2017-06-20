/*Q10:  Create a program to accepts a date and create a 
  function `checkDate` which returns date in such a way 
  if the day in the accepted date is `01` then return previous month's last day 
  else return current month's last day.
  Input   :   01-Oct-2016
  Output :  30-Sep-2016
  Input : 05-Oct-2016
  Output : 31-Oct-2016.
*/

const inputDate1 = new Date("01-Oct-2016");
const inputDate2 = new Date("05-Oct-2016");
const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let checkDate = function(inputDate){
  let date = inputDate.getDate();
  let month = inputDate.getMonth();
  let year = inputDate.getFullYear();
  let formattedDate;
  if(date === 1){
    formattedDate = new Date(year, month, 0);
  }else{
    formattedDate = new Date(year, month+1, 0);
  }
  // console.log("Input Date:", date+"-"+monthArray[month]+"-"+year);
  var outputDate = formattedDate.getDate()+"-"+monthArray[formattedDate.getMonth()]+"-"+formattedDate.getFullYear();
  // console.log("Output Date:", outputDate);
  return outputDate;
}
checkDate(inputDate1);
checkDate(inputDate2);
module.exports = checkDate;