const names = ['asad','umair','shahbaz','ali']
let template = '';

names.forEach(function(name){
    template += `<div>Hi, My name is ${name}</div>`
})

document.body.insertAdjacentHTML("afterbegin",template)