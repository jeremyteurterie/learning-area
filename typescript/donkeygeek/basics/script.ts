// const
const pi = Math.PI;
const API_KEY = 'iwdfnjwnwnfr';
console.log(pi);

// let
let number = 20;
number = 21;
console.log(number);

// type inference
let firstName;
firstName = true;
firstName = 'red';
firstName = 10;

// string
let lastName = 'Dupont';
// number
let age = 20;
// boolean
let isLogging = true;

lastName = 'Dora';
age = 25;
isLogging = false;

lastName = 23;
age = true;
isLogging = 'Hello';

// type assignation
let alien: string = 'Roger';
let width: number;
width = 20;
width = true;

const sum = (val1: number, val2: number) => {
  return val1 + val2;
};

sum(20, 15);
