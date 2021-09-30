let number = prompt("Enter your three-digit number!");

const thirdDigit = number % 10;
number = (number - thirdDigit) / 10;
const secondDigit = number % 10;
const firstDigit = (number - secondDigit) / 10;

const digitsSum = firstDigit + secondDigit + thirdDigit;

const isEven = !(digitsSum % 2);

isEven
  ? console.log("Sum of numbers is even.")
  : console.log("Sum of numbers is odd.");

const isMultipleByFive = !(digitsSum % 5);

isMultipleByFive
  ? console.log("Sum of numbers is multiple by five.")
  : console.log("Sum of numbers is not multiple by five.");

const digitsMultiplication = firstDigit * secondDigit * thirdDigit;

digitsMultiplication > 100
  ? console.log("Multiplication of digits greater than 100.")
  : console.log("Multiplication of digits less than 100.");
