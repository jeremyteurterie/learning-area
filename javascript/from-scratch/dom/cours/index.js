// ** Le Dom **

![DOM](assets/dom.png){width: 400px}

// selecteurs
// document.querySelector("h4").style.background = "yellow";

// const baliseHTML = document.querySelector("h4");

// console.log(baliseHTML);

// baliseHTML.style.background = "yellow";

//----------------------------------------------
// Click event
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');

questionContainer.addEventListener('click', () => {
  //   questionContainer.style.background = "red";
  //   questionContainer.style.border = "3px solid teal";
  questionContainer.classList.toggle('question-clicked');
});

btn1.addEventListener('click', () => {
  response.classList.add('show-response');
  response.style.background = 'green';
});

btn2.addEventListener('click', () => {
  response.classList.add('show-response');
  response.style.background = 'red';
});

/* <div> > #id > .class > baliseHTML */

//----------------------------------------------
// Mouse Events
const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (event) => {
  mousemove.style.left = event.pageX + 'px';
  mousemove.style.top = event.pageY + 'px';
});

window.addEventListener('mousedown', () => {
  mousemove.style.transform = 'scale(2) translate(-25%, -25%)';
});

window.addEventListener('mouseup', () => {
  mousemove.style.transform = 'scale(2) translate(-50%, -50%)';
  mousemove.style.border = '2px solid teal';
});

questionContainer.addEventListener('mouseenter', () => {
  questionContainer.style.background = 'rgba(0,0,0,0.6)';
});

questionContainer.addEventListener('mouseout', () => {
  questionContainer.style.background = 'pink';
});

response.addEventListener('mouseover', () => {
  response.style.transform = 'rotate(2deg)';
});

//----------------------------------------------
// Keypress
const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');

const ring = (key) => {
  const audio = new Audio();
  audio.src = './Enter.mp3';
  audio.play();
};

document.addEventListener('keypress', (event) => {
  key.textContent = event.key;

  if (event.key === 'j') {
    keypressContainer.style.background = 'pink';
  } else if (event.key === 'h') {
    keypressContainer.style.background = 'teal';
  } else {
    keypressContainer.style.background = 'red';
  }
  if (event.key === 'z') ring(event.key);
});

//----------------------------------------------
// Scroll Event
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = '-50px';
  }
});

//----------------------------------------------
// Form Event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = '';
let language = '';

inputName.addEventListener('input', (event) => {
  pseudo = event.target.value;
});

select.addEventListener('input', (event) => {
  language = event.target.value;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (cgv.checked) {
    document.querySelector('form > div').innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage prefere : ${language}</h4>
    `;
  } else {
    alert('Veuillez accepter les CGV');
  }
});

//----------------------------------------------
// Load Event
window.addEventListener('load', () => {
  console.log('Document charge!');
});

//----------------------------------------------
// ForEach
const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('click', (event) => {
    event.target.style.transform = 'scale(0.7)';
  });
});

//----------------------------------------------
// addEventListener vs onClick
// document.body.onclick = () => {
//   console.log('click!');
// };

// Bubbling => fin (de base l eventlistener est parametre en mode bubbling)
document.body.addEventListener('click', () => {
  console.log('click n 1');
});

// Usecapture
document.body.addEventListener(
  'click',
  () => {
    console.log('click n 2');
  },
  true
);

//----------------------------------------------
// stopPropagation
questionContainer.addEventListener('click', (event) => {
  alert('Test!');
  event.stopPropagation;
});

// removeEventListener

//----------------------------------------------
// BOM
// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open('http://google.com', 'cours js', 'height=600', 'width=800');
// window.close()

// evenement adosse a windows
// alert('hello');

// confirm
btn2.addEventListener('click', () => {
  confirm('Voulez vous vraiment vous tromper?');
});

// prompt
let answer;
btn1.addEventListener('click', () => {
  let answer = prompt('Entrez votre nom');
  questionContainer.innerHTML = '<h3>Bravo ' + answer + '</h3>';
});

// setTimeout
setTimeout(() => {
  questionContainer.style.borderRadius = '300px';
}, 2000);

// setIntervale
let interval = setInterval(() => {
  document.body.innerHTML += `<div class='box'><h2>Nouvelle Boite !</h2>
  </div>
  `;
}, 1000);

document.body.addEventListener('click', () => {
  clearInterval(interval);
});

// location
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);
// location.replace('http://lequipe.fr');

// window.onload = () => {
//   location.href = 'http://twitter.fr';
// };

// Navigator
console.log(navigator.userAgent);
