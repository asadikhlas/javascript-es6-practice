const data = [
    {
        name:'asad',
        Amt:100
    },
    {
        name:'umair',
        Amt:100
    }
]

const checkBalance = (name) => {
     const a = data.filter( item => item.name === name )
     return a;
}
// console.log(checkBalance('asad'))

// const deposit = (name,Amt) => {
//     for(let i = 0; i < data.length; i++){
//         if(data[i].name === name){
//             data[i].Amt += Amt
//         }
//         return data
//     }

// }
// console.log(deposit('asad',150));

const newAccount = (name) => {
    const obj = {
        name,
        Amt:100
    }
    data.push(obj)
    return data
}
console.log(newAccount('shahbaz'))
console.log(data)

const closeAccount = (name) => {
    const a = data.filter(item => item.name !== name)
    return a
}
console.log(closeAccount('asad'))