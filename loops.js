// loops types

// for loop 
// while loop 
// do while  
// for of
// for in 

// for loop 
// syntax 

// for(initilization;condition;iteration)

for(let a =1;a<=5;a++){
    console.log("gajendran");
    
}

// while loop 

// syntax
// initilization
// while(condition){
// console
// iteration
// }

let b = 5;
while(b>=0){
    console.log(b);
    b--
};

// do while

let c= 1;
do{
    console.log("java");
    c++
}while(c<=5);


// for of 
 
let days = ["sunday","monday","tuesday","wednesday","thuresday","friday","saturday"]
for(sap of days){
    console.log(sap);
}

// for in 

let obj ={
    name : "Gajendran",
    place : "chennai",
    num : 9876543987,
    id : 8734687566
}
for (result in obj){
    console.log(result+" = "+obj[result]);
    
}
