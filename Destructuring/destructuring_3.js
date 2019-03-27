
//ES5 CODE

// const users = [
//     {name:'asad',lastname:'ikhlas',age:22},
//     {name:'umair',lastname:'bajwa',age:21},
//     {name:'shahbaz',lastname:'hussain',age:25},
// ]


// const lastname = users[0].lastname

// console.log(lastname)


//es6 coding

const users = [
    {name:'asad',lastname:'ikhlas',age:22},
    {name:'umair',lastname:'bajwa',age:21},
    {name:'shahbaz',lastname:'hussain',age:25},
]

const [{lastname}] = users

console.log(lastname)