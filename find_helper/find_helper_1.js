const brands = [
    {name:'I phone',id:1},
    {name:'Samsung',id:2},
    {name:'Samsung',id:3},
    {name:'Motrolla',id:2}
]

 
const result = brands.find(function(brand){
    return brand.name === 'Samsung'
})

console.log(result)

//RESULT name:'Samsung',id:3

// const result = brands.filter(function(brand){
//     return brand.name === 'Samsung'
// })

//result name:'Samsung',id:2,
    //   name:'Samsung',id:3