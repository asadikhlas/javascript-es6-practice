//ES5 CODE

// const createCharacter = function(name,power){
//     return {
//         name:name,
//         power:power,
//         getFriends:function(){
//             return 'asad ikhlas'
//         }
//     }
// }

// const characterObj = createCharacter('superman','fly')
// console.log(characterObj)


//ES6 CODE
const createCharacter = (name,power)=>{
    return {
        name,
        power,
        getFriends(){
            return 'asad ikhlas'
        },
        getEnemies(){
            return 'usama ikhlas'
        }
    }
}

const characterObj = createCharacter('superman','fly')
console.log(characterObj.getEnemies)