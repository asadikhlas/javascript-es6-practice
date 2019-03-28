//unresolved , Pending
//Resolved , Fulfiled
//Rejected


let promise = new Promise((resolved, rejected)=>{
    setTimeout(()=>{
        resolved()
    },5000)
})

promise.then(()=>console.log('finished'))