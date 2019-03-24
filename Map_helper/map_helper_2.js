const users = [
  { user: "asad ikhlas", age: 22, eyes: "brown" },

  { user: "umair", age: 22, eyes: "brown" },

  { user: "shahbaz", age: 22, eyes: "brown" }
];

const listOfUser = users.map(function(user){
    return user.user
})

listOfUser.forEach(function(name){
    const select = document.querySelector('select')

    select.insertAdjacentHTML("afterbegin",`<option value-${name}>${name}</option>`)
})

console.log(listOfUser)
