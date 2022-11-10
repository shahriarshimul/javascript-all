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

countries[3]="Bangladesh";
console.log(countries);
