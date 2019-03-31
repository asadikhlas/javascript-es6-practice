function* brands() {
  yield "Ford";
  yield "Nissan";
  yield "Chevy";
  yield "Toyota";
  yield "Honda";
}
const gen = brands();

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

for (var i of brands()) {
  console.log(i);
}  
