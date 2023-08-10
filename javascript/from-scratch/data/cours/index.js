// ** Type de donnees **
let string = 'Chaine';
let number = 25;
let boolean = true;
let maVariable; // type Undefined

// Tableaux
let array = ['Bordeaux', 'Toulouse', 'Nantes'];
// console.log(array[0][3]); // Toulouse

let array2 = ['Bordeaux', 24, true, [1, 2], { nom: 'Denis' }];
// console.log(array2[4].nom);

let objet = {
  pseudo: 'Denis',
  age: 33,
  technos: ['JavaScript', 'React', 'NodeJS'],
  admin: false,
};
// objet.adresse = '22 rue du code';
// console.log(objet);

let data = [
  {
    pseudo: 'Denis',
    age: 33,
    technos: ['JavaScript', 'React', 'NodeJS'],
    admin: false,
  },
  {
    pseudo: 'Samia',
    age: 24,
    technos: ['CSS', 'React', 'NodeJS'],
    admin: false,
  },
  {
    pseudo: 'Nikola',
    age: 42,
    technos: ['PHP', 'React', 'NodeJS'],
    admin: true,
  },
];
// console.log(data[2].pseudo[0]);

// ** Les structures de controle **
// if else
if (data[0].age > data[1].age) {
  //   console.log(data[0].pseudo + ' est plus age que ' + data[1].pseudo);
} else {
  // Valeur si faux
}

// While
let w = 0;

while (w < 10) {
  w++;
  //   console.log('La valeur de w est de : ' + w);
}

// Do while
let d = 0;

do {
  d++;
  //   console.log(d);
} while (d < 5);

// Boucles for
for (const user of data) {
  //   document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

// on declare la valeur de i - jusqu ou on boucle - on incremente i si la condition 2 n est pas rempli
for (i = 0; i < data.length; i++) {
  //   console.log(i);
  //   console.log(data[i].technos);
  //   document.body.innerHTML += '<h2>' + data[i].technos + '</h2>';
}

// Switch
document.body.addEventListener('click', (e) => {
  switch (e.target.id) {
    case 'JavaScript':
      document.body.style.background = 'yellow';
      break;
    case 'PHP':
      document.body.style.background = 'violet';
      break;
    case 'Python':
      document.body.style.background = 'blue';
      break;
    default:
      null;
  }
});

// ** Methodes String **
let string2 = 'JavaScript est un langage oriente objet';
// let newString = string2.slice(20);
// let newString = string2.slice(5, 17);
// console.log(newString);

console.log(eval(parseInt('1') + 2));
console.log(typeof '42');
console.log(isNaN('48'));
console.log(string2.length);
console.log(string2[string2.length - 1]);
console.log(string2.indexOf('x')); // Retourne -1 s'il ne connait pas
console.log(string2.split(' '));
console.log(string2.toLowerCase());
console.log(string2.toUpperCase());
console.log(string2.replace('JavaScript', 'PHP'));

// Methodes pour les numbers
let number2 = 42.1234;
let numberString = '42.12 est un chiffre';

console.log(number2.toFixed(1));
console.log(parseInt('43'));
console.log(parseInt(numberString));
console.log(parseFloat(numberString));

// Math
console.log(Math.PI);
console.log(Math.round(4.5));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.pow(2, 7));
console.log(Math.sqrt(16));
console.log(Math.floor(Math.random() * 50));

// Methodes pour les Arrays
let array3 = ['JavaScript', 'PHP', 'Python'];
let array4 = ['Ruby', 'Solidity'];

let newArray = array3.concat(array4);
console.log(newArray);

let newArray2 = [...array3, ...array4];
console.log(newArray2);

console.log(array3.join('/'));
console.log(array3.slice(1));
console.log(newArray.slice(2, 5));
console.log(array3.indexOf('Python'));

array3.forEach((languages) => console.log(languages));

console.log(array3.every((language) => language === 'PHP'));
console.log(array3.some((language) => language === 'PHP'));

let shift = array3.shift();
console.log(shift);
console.log(array3.pop());

const restArray = array3.splice(1, 2, 'C++');
console.log(array3);

// IMPORTANT //
let arrayNumber = [4, 74, 28, 12, 1];
console.log(arrayNumber.reduce((x, y) => x + y));

arrayNumber.push(17);
console.log(arrayNumber);

// FILTER(garder certains element d'un tableau), SORT, MAP
console.log(arrayNumber.filter((number) => number > 10));
console.log(arrayNumber.sort());
console.log(arrayNumber.sort((a, b) => a - b));

document.body.innerHTML = arrayNumber
  .map((number) => `<li> ${number}</li>`)
  .join('');

// Methodes pour les Objects
document.body.innerHTML = data
  .filter((user) => user.admin === false)
  .filter((user) => user.pseudo.includes('Den'))
  .sort((a, b) => b.age - a.age)
  .map(
    (user) =>
      ` <div class='user-card'
      <h2>${user.pseudo}</h2>
      <p>Age : ${user.age} ans</p>
      <p>Status : ${user.admin ? 'Moderateur' : 'Membre'}</p>
      </div>
    `
  )
  .join('');

// Les dates
let date = new Date(); // Date classique
let timestamp = Date.parse(date); // Timestamp
console.log(date.toISOString()); // IsoString

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return newDate;
}

console.log(dateParser(date));
