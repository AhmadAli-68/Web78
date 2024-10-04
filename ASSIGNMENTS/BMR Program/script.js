let gender = prompt("Enter the gender (Male/Female) to Calculate the BMR of a person:");

let height = prompt("Enter the height:"); // Height in cm
let weight = prompt("Enter the weight:"); // Weight in kg
let age = prompt("Enter the age of a person:"); // Age in years

//Calculate BMR for Men
if (gender === 'male') {
    let bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);  // Formula for the calculation of BMR of Men
    console.log("Your BMR is: " + bmr.toFixed(2) + " calories/day.");
}

// Calculate BMR for Women
else if (gender === 'female') {
    let bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);  // Formula for the calculation of BMR of Women
    console.log("Your BMR is: " + bmr.toFixed(2) + " calories/day.");
}

else {
    console.log("Invalid Gender");
}