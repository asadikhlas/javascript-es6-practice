const cars = ['camera','phone','A5']


// const [camera,phone,A5] = cars

// console.log(phone)


const [camera,...rest] = cars

console.log(rest)