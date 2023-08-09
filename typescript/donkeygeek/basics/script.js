// const
var pi = Math.PI;
var API_KEY = 'iwdfnjwnwnfr';
console.log(pi);
// let
var number = 20;
number = 21;
console.log(number);
// type inference
var firstName;
firstName = true;
firstName = 'red';
firstName = 10;
// string
var lastName = 'Dupont';
// number
var age = 20;
// boolean
var isLogging = true;
lastName = 'Dora';
age = 25;
isLogging = false;
lastName = 23;
age = true;
isLogging = 'Hello';
// type assignation
var alien = 'Roger';
var width;
width = 20;
width = true;
var sum = function (val1, val2) {
    return val1 + val2;
};
sum(20, 15);
var pseudo = 'Superman';
var total = 200;
var isLoading = false;
var colors = ['red', 'blue', 'green', 'orange'];
var numbers = [1, 5, 7.5, 0];
numbers.push(20);
console.log(numbers);
var values;
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
var strNum = ['red', 9, false];
strNum.push('salut');
// tuple
var x;
x = ['Hello', 20];
// x = ['Hello', 20, 'Bonjour'];
x.push('Bonjour');
console.log(x);
console.log(x[1].toString);
console.log(typeof x[1]);
var member = {
    level: ['admin', 1],
};
member.level[0] = 'moderator';
console.log(member.level);
member.level.push('Salut');
console.log(member.level);
