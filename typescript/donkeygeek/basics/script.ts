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

let pseudo: string = 'Superman';
let total: number = 200;
let isLoading: boolean = false;

let colors: Array<string> = ['red', 'blue', 'green', 'orange'];
let numbers: number[] = [1, 5, 7.5, 0];

numbers.push(20);

console.log(numbers);

let values: any[];
values = [
  'Bonjour',
  true,
  500,
  {
    name: 'Jeremy Teurterie',
    age: 23,
    member: false,
    hobbies: ['video games', 'football'],
  },
];

let strNum = ['red', 9, false];
strNum.push('salut');
