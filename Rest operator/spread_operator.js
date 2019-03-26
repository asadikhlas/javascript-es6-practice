//ES5 CODE

// const brands = ['Ford','Nissan']
// const otherBrands = ['Audi','BMW']

// const newArray = brands.concat(otherBrands)
// newArray.push('new array')

// console.log(newArray)

//ES6 CODE

const brands = ["Ford", "Nissan"];
const otherBrands = ["Audi", "BMW"];

const newArray = [...brands, ...otherBrands, "new array"];

console.log(newArray);
