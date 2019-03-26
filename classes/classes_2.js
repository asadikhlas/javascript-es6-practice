// class Car {
//     constructor(){
//         this.status = options.status;
//         this.wheels = options.wheels;
//         this.avail = options.avail;
//     }
// }

// const car = new Car({
//     status:'New',
//     wheels:4,
//     avail:()=>{console.log('avail')}
// })
class Car {
    constructor(){
        this.condition = 'NEW';
        this.wheels = '4';
        this.avail = () => {
            console.log('avail')
        }
    }
}

class Ford extends Car {
    constructor(){
    super()
    }
}

const car = new Car()
const ford = new Ford()


ford.color = 'red';
console.log(ford)

// console.log(car)