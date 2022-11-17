// adding two for each of the element of an array & creating a new one (array.map)
const numbers=[2,34,11,32.67,36,78];
const numbers1=numbers.map(numbersIter);
function numbersIter(value, index,array)
{return value+2;};
console.log(numbers1);


// This example creates a new array from elements with a value larger than 18:(array.find)

const points=[3,45,66,33,55,18,10,12,11,656,67,123];
const points2=points.filter(pointsArray);
function pointsArray(value,index,array)
{
    return value>18,index[3]=100;
}
console.log(points2);


// This example finds the sum of all numbers in an array: (reduceRight)

const test1=[1,2,3,4,5,6,7,345,23];
const test2=test1.reduceRight(testNumber);
function testNumber(total,value,index)
{
    return total+value;
}
console.log(test2);


// finding the index position for an array (indexOf)

const fruits = ["Apple", "Orange", "Apple", "Mango"];
const fruits1=fruits.indexOf();
console.log(fruits1["Mango"]);


// This example finds the first element that is larger than 18: (JavaScript Array find())

const nuumberrs=[3,5,123,23,45];
const numberss=nuumberrs.find(numbersFinder)
function numbersFinder(value, array, index)
{
    return value>18;
}
console.log("The first element of array using find() method which is larger than 18: "+ numberss);


// This example finds the index of the first element that is larger than 18:

const pointer = [4, 9, 16, 25, 29];
const pointers=pointer.findIndex(myFunction);
function myFunction(value,array,index)
{
    return value>18;
}
console.log("The first element of array using findIndex() method which is larger than 18: "+ pointers);


