const distanceInKm = prompt("Enter distance in km");
let distanceInFt = prompt("Enter distance in fut");

distanceInFt = (distanceInFt * 0,305) / 1000;

if (distanceInKm > distanceInFt) {
  console.log('Distance in km greater.');
} else {
  console.log('Distance in ft greater.');
}
