const paintings = [
    {name:'Mona lisa',width:200,height:200},
    {name:'The scream',width:400,height:600},
    {name:'The last supper',width:600,height:700}]
const result = paintings.map(function(item){
    return `The ${item.name} is ${item.height} * ${item.width}`
})

console.log(result)
