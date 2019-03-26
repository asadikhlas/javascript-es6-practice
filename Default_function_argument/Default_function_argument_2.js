// function greeting(name){
//     if(name === undefined){
//         name = 'user'
//     }
//     return 'Hello '+ name;
//  }
//  console.log(greeting())


function greeting(name = 'user'){
    return  `hello ${name}`
}

console.log(greeting('asad'))