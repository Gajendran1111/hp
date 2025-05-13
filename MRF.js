// map 
// reduce 
// filter 

// map
// variable name.map((value,index,accumalator)=>)

    const a =[10,20,30,40,50,60]
    const b=a.map((val,ind,acc)=>ind*5)
    console.log(b);

// filter
// variable name.filter((value,index,accumalator)=>)
    const c = [10,20,30,40,50,569,9552,5,3,12,45,78,85,963,332,65,4,52.22,12,10,3,8]
    let d = c.filter((x,y,z)=>z>10)
    console.log(d);

// reduce
// syntax 
// variable name.reduce((accumalator,acctualarray)=>)

   let red = [10,20,30,40]
   let ced= red.reduce((a,b)=>a-b)
    console.log(ced);
    


 