/* The date object*/
var myDate = new Date();

/* new Date(year, month, day, hours, minutes, seconds)
months 0-11
days 0-6
hours 0-23
day 1-31
*/

var myPastDate = new Date(1410, 09, 23);
var myFutureDate = new Date(2450, 0, 09, 13, 25, 45);

/*Date methods
.getMonth
.getFullYear
.getDate
.getDay
.getHours
.getTime */

var myBirthday = new Date(1991, 10, 12);

console.log(myBirthday.getDate());
console.log(myBirthday.getDay());
