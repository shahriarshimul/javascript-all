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
const datess=dates.sort(function datesFinder(a,b)
{
    return  a.year-b.year
});
console.log(dates);
console.log(a.year-b.year);