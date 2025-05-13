// callback 

function walk (callback){
    setTimeout(() => {
        console.log("walk the dog");
        callback()
    }, 5000);
}
function clean (callback){
    setTimeout(() => {
        console.log("clean the kitchan");
        callback()
    }, 2000);
}
// walk(clean);
// callback hellq   `
function trash (callback){
    setTimeout(() => {
        console.log("put the trash out");
        callback()
    }, 500);
}
function work (callback){
    setTimeout(() => {
        console.log("work completed");
        
    }, 5000);
}
walk(()=>{
    clean(()=>{
        trash(()=>{
            work(()=>{})
        })
    })
})

