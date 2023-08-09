var form = document.getElementById('signupForm');
var firstName = document.getElementById('firstName');
var age = document.getElementById('age');
function gift(age) {
    return age + 3;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (+age.value < 18) {
        console.log('Inscription refusee');
    }
    else {
        console.log("Bienvenue ".concat(firstName.value, ". Vous avez ").concat(age.value, ". Vous aurez droit a un cadeau quand vous aurez ").concat(gift(+age.value)));
    }
});
