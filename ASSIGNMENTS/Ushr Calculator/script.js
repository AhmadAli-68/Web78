let totalProduce = prompt("Enter the total produce in Kilogram:");
// let isNaturallyIrrigated = true;

let IrrigationType = prompt("Is the land naturally irrigated? Enter 'yes' or 'no'.");
let isNaturallyIrrigated = (IrrigationType === 'yes');

let UshrRate;

if (isNaturallyIrrigated) {
    UshrRate = 0.10; // 10% for naturally irrigated land
} else {
    UshrRate = 0.05; // 5% for artificially irrigated land
}

let UshrAmount = totalProduce * UshrRate;
console.log("Total Produce: " + totalProduce + " kg");
console.log("Usher amount: " + UshrAmount + " kg");