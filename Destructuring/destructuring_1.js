//ES5 CODE

// var user = {
//     name:'asad',
//     lastname:'ikhlas',
//     age:22
// }

// var name = user.name;
// var lastname = user.lastname;
// var age = user.age;

// console.log(name)
// console.log(lastname)
// console.log(age)

//ES6 CODE

const user = {
  name: "asad",
  lastname: "ikhlas",
  age: 22
};

// const {name,lastname,age} = user;

// console.log(name)
// console.log(lastname)
// console.log(age)

const message = ({ name, lastname, age }, salute) => {
  console.log(`My name is ${name} ${lastname} and I am ${age} ${salute}`);
};

message(user, "hey");
