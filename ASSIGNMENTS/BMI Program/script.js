let BMI, weight, height; // Weight in kg and height in meters.

weight = prompt("Enter your weight in KG:");
height = prompt("Enter your height in meters:")

BMI = weight / height ** 2;
console.log(BMI);

if (BMI < 18.5) {
    console.log("Person is underweight!");
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Person has normal weight!");
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log("Person has overweight!");
} else {
    console.log("Person is obese!");
}