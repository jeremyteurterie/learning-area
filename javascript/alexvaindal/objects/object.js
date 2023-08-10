// les objects ne sont pas des valeurs primitives
// they are mutables
// can be created and modified

var person = { name: "Axel" };
var person2 = { name: "Axel" };

var person3 = person;

person3.name = "Alicia";

console.log(person3);
