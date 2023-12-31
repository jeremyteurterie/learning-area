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

// type assignation
let alien: string = 'Roger';
let width: number;
width = 20;

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

// tuple
let x: [string, number];
x = ['Hello', 20];
// x = ['Hello', 20, 'Bonjour'];
x.push('Bonjour');
console.log(x);

console.log(x[1].toString);
console.log(typeof x[1]);

const member: {
  level: [string, number];
} = {
  level: ['admin', 1],
};

member.level[0] = 'moderator';
console.log(member.level);

member.level.push('Salut');
console.log(member.level);

// object
let car: {
  color: string;
  date: number;
  speed: number;
} = {
  color: 'red',
  date: 2020,
  speed: 500,
};
