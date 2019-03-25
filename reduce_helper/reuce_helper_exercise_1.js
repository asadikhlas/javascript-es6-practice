const trips = [
  { to: "Brazil", distance: 1000 },
  { to: "Chine", distance: 2500 },
  { to: "India", distance: 3000 }
];
let totalDistance = trips.reduce(function(sum, trip) {
  return sum + trip.distance;
}, 0);

console.log(totalDistance);
