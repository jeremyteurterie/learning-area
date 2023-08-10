// Tout ce qui n'est pas primitives est un objet ou fonction

console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof new Date()); // object
console.log(typeof /(hellogoodbye)/); // object

console.log(typeof function () {}); // function
console.log(typeof (() => {})); // function
console.log(typeof Math.ceil); // function
