class Car {
    constructor(options){
        this.status = options.status;
        this.wheels = options.wheels;
        this.avail = options.avail;
    }
}

const car = new Car({
    status:'New',
    wheels:4,
    avail:()=>{console.log('avail')}
})

console.log(car)