//unresolved , Pending
//Resolved , Fulfiled
//Rejected


let promise = new Promise((resolved, rejected)=>{
    setTimeout(()=>{
        // resolved()
        rejected()
    },5000)
})

promise.then(()=>console.log('finished'))
.catch(()=>console.log('damn'))