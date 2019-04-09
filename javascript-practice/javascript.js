// const numbers = [1, 2, 3, 4, 5];
// const otherArray = numbers.map(function(number){
//     return number * 2
// })

// console.log(otherArray)




// const number = 80.6
// let newNumber = Math.round(number)
// console.log(newNumber)

// const returnemploye = () =>{
//     const name = "Asad";
//     const age = 22;
//     const position = "manager";

//     console.log(`My name is ${name} my age is ${age} my position is ${position}`)
// }

// returnemploye();




// const Obj = {
//     name: 'asad',
//     Id: '2030', 
//     profession: 'React Developer'
// }

// // const {name,Id,profession} = Obj;

// const message = ({name,Id,profession}) => {
//     console.log(`My name is ${name} my id is ${Id} and my profession is ${profession}`)
// } 

// message(Obj)


// const newFunction = () => {
//     let x = Math.floor((Math.random() * 1000) + 1)
//     console.log(x)
// }

// newFunction()







// const newFunction = () => {
//     let string = 'hello  world';
//     let count = string.length;
//     console.log(count)
// }

// newFunction()






// var a = prompt("Enter a value");
// var arr = [];

// for (var i = 0; i < a.length; i++) {
//     arr[i] = a.charAt(i);
// }
// arr.reverse();
// alert(arr);




// const New = new Date();
// console.log(New)




// let string = 'hello world';
// let res = string.toUpperCase()

// console.log(res)





// var Books = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];


//     const newBooks = Books.map(item=> {
//         console.log(`${item.title} ${item.author} ${item.readingStatus}`)
//     })




// const obj = {
//     name: 'Umair',
//     profession: 'developer', 
//     age: 21, 
//     skills: { 
//         Coding: ['react', 'javascript', 'nodejs'],
//         Design: { 
//             Platform: ['android', 'ios']
//         }
//     }
// }

// let message = `hello my name is ${obj.name} i'm a ${obj.profession} my skills is ${obj['skills'].Coding} and i design apps for ${obj['skills'].Design['Platform']}`


// console.log(message)




// const obj1 = {
//     name:'asad ikhlas',
//     age:22,
//     profession:'developer'
// }

// const obj2 = {
//     skills:['programming','designing']
// }

// Object.assign(obj1,obj2)

// console.log(obj1.skills)



const obj = {
    id1:1, 
    id2:2, 
    id3: 3
}
const message = ({id1,id2,id3}) => {
let newObj = id1 === id2 ? 'equal' : 'not equal'
console.log(newObj)
}
message(obj)       

