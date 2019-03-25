const computers = [
  { type: "Laptop", price: 124, os: "Windows" },
  { type: "Desk", price: 124, os: "Mac" },
  { type: "Desk", price: 124, os: "Windows" },
  { type: "Laptop", price: 124, os: "Mac" },
  { type: "Laptop", price: 124, os: "Windows" }
];

let result = computers.reduce(
  function(start, computer) {
    if (computer.os === "Mac") {
      return { mac: Start.mac + 1, windows: Start.windows };
    } else {
      return { mac: Start.mac, windows: Start.windows + 1 };
    }
  },
  { mac: 0, windows: 0 }
);

console.log(result);
