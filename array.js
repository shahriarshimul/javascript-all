let numbers=[1,2,3,4,5];
numbers[0]=6; /* replacing an element from the index number */
console.log(numbers);

/* accesing the first element from an array */

let queues=["Train","Bus","MetroRail","Plane"];
let queue=queues[2];
console.log(queue);

/* accesing the last element from an array */
queue=queues[queues.length-1];
console.log(queue);


/* looping array elements */

let countries=["Argentina","Brazil","Cameroon","Donask","Ethiopia","Finland","Ghana"];
let country=countries.length;

let earth="<ul>";

for(i=0;i<country;i++)
{
    earth += "<li>"+countries[i]+"</li>";
}
earth+="</ul>";

console.log(countries);
/* removing donask & adding Bangladesh in the same array */
countries[3]="Bangladesh";
console.log(countries);

/* adding an element in the array */
countries.push("India");
console.log(countries);

/* crates undefined space in the array */

countries[10]="Pakistan";
console.log(countries);


// Convereting array into string

let arrayResult=countries.toString();
console.log(arrayResult);


// using join method for converting array into string. Here we can also specify the seperator using double or single quotation

let arrayResults=countries.join(" & ");
console.log(arrayResults);

// popping & pushing 

let clarifyResults=countries.push("Myanmar");
console.log(countries);