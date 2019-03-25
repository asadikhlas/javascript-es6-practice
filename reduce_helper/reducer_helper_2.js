const users = [
    {name:'asad',lastname:'ikhlas',age:22},
    
    {name:'umair',lastname:'ikhlas',age:22},
    
    {name:'shahbaz',lastname:'ikhlas',age:22},
]

const name = users.reduce(function(start,user){
    start.push(user.name)
    return start;
},[])

console.log(name)