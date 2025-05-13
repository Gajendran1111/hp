// settimeout     

function box1 (){
    setTimeout(() => {
        console.log("successful");
        
    }, 5000);
}
function box2 (){
    setTimeout(() => {
        console.log("loading");
        
    }, 2000);
}
function box3 (){
    setTimeout(() => {
    console.log("complet");
    
    }, 3000);
}
box1();
box2();
box3();
