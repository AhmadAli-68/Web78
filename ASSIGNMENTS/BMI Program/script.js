let BMI, weight, height; // Weight in kg and height in meters.

weight = prompt("Enter your weight in KG:");
height = prompt("Enter your height in meters:")

BMI = weight / height ** 2;
// console.log(BMI);
document.write(BMI);

if (BMI < 18.5) {
    document.write("\n");
    document.write("Person is underweight!");
} else if (BMI >= 18.5 && BMI <= 24.9) {
    document.write("\n");
    document.write("Person has normal weight!");
} else if (BMI >= 25 && BMI <= 29.9) {
    document.write("\n");
    document.write("Person has oveweight!");
} else {
    document.write("\n");
    document.write("Person is obese!")
}