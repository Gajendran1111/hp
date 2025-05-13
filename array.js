// array methods 

// push 
// pop
// shift 
// unshift
// splice
// sort 
// reverse


// push 

let pu = [10,20,30,40,50];
pu.push(60);
console.log(pu);

// pop

let po = [10,20,30,40,50];
po.pop();
console.log(po);

// shift

let sh = [10,20,30,40,50];
sh.shift();
console.log(sh);

// unshift 
let un = [10,20,30,40,50];
un.unshift(9);
console.log(un);

// splice 
// syntax 

// 0 it is use to add the value in the given index space 
// 1 it is use to replace the given index space

// variable name.splice(index,splice,value);


let days = ["sunday","monday","tuesday","thuresday","thuresday","friday","saturday"]
days.splice(3,0,"wednesday");
console.log(days);

// sort 

let ab = ["mango","apple","orange","banana","guava","pineapple","dragonfruit"];
console.log(ab.sort());

let rev = "trendnologies";
console.log(rev.split("").reverse().join(""));
