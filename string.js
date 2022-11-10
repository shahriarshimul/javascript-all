// let text1="This is Shahriar having indigenous issues in his life";

// console.log(text1);

// // length declaration

// let length= text1.length;


// console.log(text1.length);





// string method

// slice method where you're gonna define the index from where you want to slice the string

let test1="This is the condition right now";


let part1= test1.slice(3,8);

// if the end value is not declared here! 
let part= test1.slice(3,); 
console.log(part1);
console.log(part);

// If a parameter is negative, the position is counted from the end of the string:
let part2= test1.slice(-8);
console.log(part2); 
// This example slices out a portion of a string from position -12 to position -6:

let part3= test1.slice(-12,-8);
console.log(part3);




// substring method is similar to the slice method


// replace method (pretty much case sensitive) & it always matches the first one

let replica="This is you you";
let replica1=replica.replace("/you/g","Me");// To replace all matches, use a regular expression with a /g flag (global match):
console.log(replica1);


// converted to uppercases

let tst100="this is not understable, okay?";
let tst101=tst100.toUpperCase();
console.log(tst101);

// converted to lowercase

let tst102="OKAY NOW I GOT u";
let tst103=tst102.toLowerCase();
console.log(tst103);


// concatenation means adding multiple string together

let one="Hello";
let two="World!";
let three="How are u?";

let four= one.concat(" ",two," ",three);
console.log(four);



// trim for removing space from both side of the  string
let ts110="           Why you need to do the thing you love most???                ";
let tst111=ts110.trim();
console.log(tst111);
// trim has to side- one is trimstart() which works from the start of the string & another one is trimend() which works from the end of the stirng. 













