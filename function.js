// function 

// syntax 
// function name(){}

function  js (){

    var a = 10;
var a = 20;
console.log(a);

let b = 100;
 b = 200;
console.log(b);

const c = 30;
console.log(c);

}
js();

// function types 
// Function  statement Declaration --> parameters and arguments

function jj (hi){
    console.log(hi)
}
jj("hello world");

// Function Expression or Anonymous Function

let a = function fun (exp){
    console.log(exp);
    
}
a("expression");

// anonymous function
let b = function (hello){
    console.log(hello);
    
}
b("anonymous");
// Immediate Invoke Function expression 

(function (iife){
    console.log(iife);
    
})("immediate");

// Arrow Function

// syntax 
// ()=>{}

    let d = (gg)=>{console.log(gg);}
    d("arrow function");

