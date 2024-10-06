let income = prompt("Enter your monthly income:"); // Amount in Rupees
let liabilities = prompt("Enter the amount for your liabilities:");

let zakatRate = 2.5 / 100;
let zakatableWealth = income - liabilities;

let zakatAmount = zakatableWealth * zakatRate;
console.log("Your Zakat amount is: " + zakatAmount);