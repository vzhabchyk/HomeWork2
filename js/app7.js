let number = prompt('Enter a six-digit number.');

const sixthDigit = number % 10;

number = (number - sixthDigit) / 10;
const fiveDigit = number % 10;

number = (number - fiveDigit) / 10;
const fourDigit = number % 10;

number = (number - fourDigit) / 10;
const thirdDigit = number % 10;

number = (number - thirdDigit) / 10;
const secondDigit = number % 10;

const firstDigit = (number - secondDigit) / 10;

const isNumberMirror = sixthDigit === firstDigit || fiveDigit === secondDigit || fourDigit === thirdDigit;

isNumberMirror ? document.write('Your number is mirror.') : document.write('Your number is not mirror.');