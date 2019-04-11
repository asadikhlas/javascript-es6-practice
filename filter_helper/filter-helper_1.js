const products = [
    { name: "Iphone", price: 200 },
    { name: "Motorola", price: 70 },
    { name: "Samsung", price: 150 },
    { name: "Sony", price: 98 },
    { name: "Windows pone", price: 150 }
  ];



const result = products.filter(function(product){
    return product.price === 150
})

console.log(result) 