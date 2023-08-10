// numbers are numbers like in the real worlds
// except there is a limit (9007199254740991)
// precision of numbers is limited

console.log(9007199254740991);

console.log(typeof 128); // numbers
console.log(typeof 3.14); // numbers
console.log(typeof -128); // numbers

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2 === 0.30000000000000000004);

// floating numbers
console.log(0.0124 + 0.03234); // 0.04474
console.log(0.01 + 0.02); // 0.03
console.log(0.1 + 0.2); // 0.30000000000000004

// special values
-0;

NaN;
console.log(typeof NaN);

Infinity;

-Infinity;

Math.MAX_SAFE_INTEGER;
Math.MIN_SAFE_INTEGER;
Math.PI;
Math.INFINITY;
