//unresolved , Pending
//Resolved , Fulfiled
//Rejected

let promise = new Promise((resolved, rejected) => {
  setTimeout(() => {
    // resolved()
    rejected();  
  }, 5000);
});

promise.then(() => console.log("finished")).catch(() => console.log("damn"));

// const url = 'https://jsonplaceholder.typeicode.com/posts/1';
// fetch(url,{
//     method:'POST',
//     headers: {
//         'content-type':'application/json'
//     },
//     body:JSON.stringify({title:'some dum title'}),
//     mode: 'cors',
//     redirect:xxx,
// })

// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log('error show', error))

 
