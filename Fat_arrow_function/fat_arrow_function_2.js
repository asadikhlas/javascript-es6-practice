//OLD ES5 CODING

// const cars = {
//     brands:['ford','audi','BMW'],
//     category:'sport car',
//     message:function(){
//         let $this = this;
//         return $this.brands.map(function(brand){
//             console.log(`${brand} is a ${$this.category}`)
//         })
//     }
// }

// cars.message()

const cars = {
    brands:['ford','audi','BMW'],
    category:'sport car',
    message:function(){
        return this.brands.map((brand)=>{
            console.log(`${brand} is a ${this.category}`)
        })
    }
}

cars.message()