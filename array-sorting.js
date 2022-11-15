// descending sorting of number
const numbers=[23,34,56,677,343,232];
numbers.sort(function(a,b){return b-a});
console.log(numbers);

// ascending sorting of number

numbers.sort(function(a,b) {return a-b});
console.log(numbers);

// numbers sorting in a indiscriminate way 

numbers.sort(function(a,b) {return b*3-a*2});
console.log(numbers);

/* Time Complexity: The time complexity of the sort() method varies & depends on implementation.
For example, in the Firefox web browser, it uses the merge sort implementation which gives time
 complexity as O(nlog n). Whereas, in Google Chrome web browser, it uses the Timsort implementation 
(a hybrid of merge sort and insertion sort), gives time complexity is O(nlogn). */



// max & min value for an array


// determinant for lowest value
const cars=[2,34,5,67,22,123];
cars.sort(function(a,b) {return a-b});
const carss=cars.length-1;
console.log(cars);
console.log(cars[0]);
console.log(cars[cars.length-1]);


// //determinant for highest value 
// cars.sort(function(a,b) {return b-a});
// const carss=cars.length-1;
// console.log(cars);
// console.log(carss[0]);

    

