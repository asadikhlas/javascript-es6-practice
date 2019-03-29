function getOrder() {
  return "Pizza and cake";
}

function* lotGenerator() {
  alert("HELLO, how can i help you");
  yield "step 1 completed";

  alert(`your order was ${getOrder()}`);
  yield "step 2 completed";

  alert("thanks for eating here");
  yield "step 3 completed";

  return "finished";
}

let gen = lotGenerator();
