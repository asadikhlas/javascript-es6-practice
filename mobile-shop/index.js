const generateId = () => {
     return Math.floor((Math.random() * 1000) + 1)
}

const obj = [
    {
        id: generateId(),
        brand:'samsung',
        quantity:0,
        mobileName:'J7',
        inStock:true,
        subTotal:15000
    },
    {
        id: generateId(),
        brand:'samsung',
        quantity:0,
        mobileName:'J8',
        inStock:false,
        subTotal:15000
    },
    {
        id: generateId(),
        brand:'Motrola',
        quantity:0,
        mobileName:'moto E',
        inStock:false,
        subTotal:5000
    },
    {
        id: generateId(),
        brand:'I-phone',
        quantity:0,
        mobileName:'X',
        inStock:true,
        subTotal:15000
    },
    {
        id: generateId(),
        brand:'Sony',
        quantity:0,
        mobileName:'Z5',
        inStock:true,
        subTotal:12000
    },
]




// const getBrand = () => {
//     const a = prompt('enter brand name')
//     const getuser = obj.filter(item => item.brand === a
//     )
//      getuser.map(item => 
//         item.inStock ? alert(`your mobile brand name is ${item.mobileName} and is in ${item.inStock}`) :  alert(`your mobile brand name is ${item.mobileName} and is in ${item.inStock}`)
//         // if(item.inStock === true){
//         //  alert(`your mobile brand name is ${item.mobileName} and is in ${item.inStock}`)
//         // }else{
//         //     alert(`your mobile brand name is ${item.mobileName} and is in ${item.inStock}`)
//         // }
//     )

// }

// getBrand();




// const  newFunction = (name,quantity) => {
//     let a;
//    for(let i = 0; i < obj.length; i++){
//         if(obj[i].mobileName === name ){
//            obj[i].subTotal *= quantity
//             a = obj[i]
       
//         }
//         shahbaz(a)
//         return a;
//     }

        


// }
// console.log(newFunction('J7',5))

// function shahbaz(a) {
//     console.log(a)
// }



console.log('Start')


setTimeout(() => {
    console.log('Start at 0')
}, 0)


console.log('End') 

