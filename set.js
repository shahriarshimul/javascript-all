// creating a set
const cars=new Set(["Volvo","PAJERO","Corolla","RTR"]);
console.log(cars);

// adding a value to a set

cars.add(["Mercedes"]);
console.log(cars.add());


// array.map js method apply to modify an array and create another one
// simplification
carsnumbers=[1,2,34,5,6,7];

for(i=0;i<carsnumbers.length;i++)
{
   carsnumbers[i]=carsnumbers[i]*3;
}
console.log(carsnumbers);


// array.map way to modify the array  we are looking for

carsnumber= [1,23,4,5,6,7,8];
carsnumbers=carsnumber.map(function(element)
{
    return element*3;
})
console.log(carsnumbers);


// map array over an object

let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];

  let newUser=users.map(function(element)
  {
    return `${element.firstName} ${element.lastName}`;
  });
  console.log(newUser);