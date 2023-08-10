for (var i = 0; i < 7; i++) {
  console.log(function () {});
}

var countSheeps = function () {
  return 7;
};
var sheeps = countSheeps;

countSheeps.maVariable = 'ceci est une variable';
console.log(countSheeps);

sheeps = countSheeps();
console.log(sheeps);

var regex = new RegExp();
