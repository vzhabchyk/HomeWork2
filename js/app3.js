const number = prompt('Enter your number.');
const isEven = !(number % 2);
const lastDigit = number % 10;

console.log(isEven ? 'Your number is even. Last digit: ' + lastDigit : 'Your number is odd. Last digit: ' + lastDigit);