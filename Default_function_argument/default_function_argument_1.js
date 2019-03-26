function randomBrands() {
  const brands = ["Ford", "Nissan", "bmw"];
  return brands[Math.floor(Math.random() * brands.length)];
}

function cars(brand = randomBrands()) {
  console.log(`my brand name is ${brand}`);
}

cars();
