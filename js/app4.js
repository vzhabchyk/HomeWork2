const number = prompt('Enter two-digit number.');

const secondDigit = number % 10;
const firstDigit = (number - secondDigit) / 10;

if (firstDigit === secondDigit) {
  console.log('First and second digits are equal.');
} else if (firstDigit > secondDigit) {
  console.log('First digit is greater than second.');
} else {
  console.log('Second digit is greater than first.');
}

