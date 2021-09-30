const firstNumber = prompt("Enter your first number.");
const secondNumber = prompt("Enter your second number.");

const firstDivideSecond = firstNumber % secondNumber;

if (!firstDivideSecond) {
  console.log('Your first number is divide your second number.');
} else {
  console.log('Your first number is not divide your second number.');
}

const secondDivideSecond = secondNumber % firstNumber;

if (!secondDivideSecond) {
  console.log('Your second number is divide your first number.');
} else {
  console.log('Your second number is not divide your first number.');
}
