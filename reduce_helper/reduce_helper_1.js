const prevoius = 200;
const current = [
  { expense: "Guitar", amount: 200 },
  { expense: "Miic", amount: 100 },
  { expense: "starp", amount: 100 }
];

const result = current.reduce(function(sum, expense) {
  return sum + expense.amount;
}, prevoius);

console.log(result);
