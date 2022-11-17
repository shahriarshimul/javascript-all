// First test regarding the date object or method. new date() creates a date object here. 

const c=new Date("2022-11-16");
console.log(c);
/* Date objects are static. The "clock" is not "running". The computer clock is ticking, date objects are not. */


// 6 numbers specify year, month, day, hour, minute, second:

const d=new Date(2022,11,16,24,30,30);
console.log(d);