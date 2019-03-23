// const names = ['asad','umair','shahbaz'];

// console.log(`The name is ${names[Math.floor(Math.random()* names.length - 1) + 1]} `)

// const user = {
// name:'asad',
// age:21,
// position:'manager'


// }
// console.log(`my name is ${user.name}, i am ${user.age}, i am working as a ${user.position} `)

function request(page,id){
    const URL = `hhtps://server.com/${page}/${id}`
    console.log(URL)
}

request('pages',5)