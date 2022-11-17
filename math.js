// Using Math.max() on an Array

// For highest value for an array
const numbers=[23,123,45,666,23434,23];
function myNumbers(numbers){
    return Math.max.apply(null,numbers);
}
console.log(numbers);
console.log("Highest Value= " + Math.max.apply(null,numbers));


// For lowest value for an array
const guitars=[34,3,24,5454621,454,233432,1224,1];
function myGuitars()
{
    return Math.min.apply(null,guitars);
}
console.log(guitars);
console.log("Lowest Value= "+ Math.min.apply(null,guitars));


// test one for different data type in an array

const dates=[   {type: "HARD",year:2021},
                {type: "Intermediate",year:2020},
                {type: "Easy",year:2019}
];
// const datess=dates.sort(function datesFinder(a,b)
// {
//     return  a.year-b.year
// });
// console.log(dates);
// console.log(a.year-b.year);


// math property

console.log(Math.round(4.9)); /* Returns x rounded to its nearest integer */ 
console.log(Math.ceil(4.2)); /* Returns x rounded up to its nearest integer */
console.log(Math.floor(3.8)); /* Returns x rounded down to its nearest integer */
console.log(Math.E); /* Value of E */
console.log(Math.LN10); /* value of ln10*/
console.log(Math.PI); /* value of PI */
console.log(Math.SQRT2); /* value of square root two */
console.log(Math.trunc(3.9)); /* Returns the integer part of x */

