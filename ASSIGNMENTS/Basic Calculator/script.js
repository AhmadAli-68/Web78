let num1 = prompt("Enter the 1st number:");
let num2 = prompt("Enter the 2nd number:");
let result;

let Operation = prompt("Enter the operation (+ - * / %) that you want to apply on numbers:");

if (Operation === '+') {
    result = Number(num1) + Number(num2);
    console.log("The addition of " + num1 + " and " + num2 + " is " + result);
} else if (Operation === '-') {
    result = Number(num1) - Number(num2);
    console.log("The subtraction of " + num1 + " and " + num2 + " is " + result);
} else if (Operation === '*') {
    result = Number(num1) * Number(num2);
    console.log("The multiplication of " + num1 + " and " + num2 + " is " + result);
} else if (Operation === '/') {
    result = Number(num1) / Number(num2);
    console.log("The division of " + num1 + " and " + num2 + " is " + result);
} else if (Operation === '%') {
    result = Number(num1) % Number(num2);
    console.log("The modulus of " + num1 + " and " + num2 + " is " + result);
} else {
    console.log("You entered invalid operation!");
}