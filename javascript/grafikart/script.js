let a = 3;
if (true) {
  let a = 5; // On crée une nouvelle variable pour le "scope" courant
  console.log(a); // 5
}
console.log(a); // 3
