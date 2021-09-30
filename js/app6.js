let number = prompt('Enter your three-digit number!');

const thirdDigit = number % 10;
number = (number - thirdDigit) / 10;
const secondDigit = number % 10;
const firstDigit = (number - secondDigit) / 10;

const isDigitsEqual = firstDigit === secondDigit && firstDigit === thirdDigit && secondDigit === thirdDigit;

if (isDigitsEqual) {
  console.log('Digits are equal.');
} else {
  console.log('Digits are not equal.');
}

const hasEqualDigits = firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit;

if (hasEqualDigits) {
  console.log('The number has the same digits.');
} else {
  console.log('The number does not have the same digits.');
}
