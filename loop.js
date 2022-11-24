// for in loop

const cars={Name: "Volvo",Color: "Black", Weight: 1200};
let carshow=" ";
for (let x in cars)
{
carshow +=cars[x]+" ";
}
console.log(carshow);


// break & continue

for(let i=0;i<5;i++){
    if(i>3)
    {
        break;
    };
    console.log("The value is "+i);
}


for(let i=0;i<10;i++){
    if(i===3)
    {               
        continue;
    };
    console.log("The value is "+i);
}

