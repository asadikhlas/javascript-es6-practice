const cars = [
    {name:'Ford',price:200},
    {name:'Nissan',price:400},
    {name:'Nissan',price:600}
]

function convertPrice(price){
    return price * 200
}

const message = cars.map(function(item){
    return `${item.name} is ${convertPrice(item.price)} rupies`
})

console.log(message)