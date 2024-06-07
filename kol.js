document.addEventListener('DOMContentLoaded', () => {
const emailField = document.querySelector("[name='email']");
const emailErrorField = document.querySelector("[name='email'] + .error");

const passwordField = document.querySelector("[name='password']");
const passwordErrorField = document.querySelector("[name='password'] + .error");
const form = document.querySelector('form');

    function requiredValidation(field, errorField) {
        if (field.value.trim() === "") {
            errorField.textContent = "Pole jest wymagane.";
            return true;
        } else {
            errorField.textContent = "";
            return false;
        }
    }
    function emailValidation(field, errorField) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(field.value)) {
            errorField.textContent = "Proszę wprowadzić poprawny email.";
            return true;
        } else {
            errorField.textContent = "";
            return false;
        }
    }
    function passwordValidation(field, errorField) {
        var superPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
        if (!superPassword.test(field.value)) {
            errorField.textContent = "Proszę wprowadzić poprawne hasło.";
            return true;
        } else {
            errorField.textContent = "";
            return false;
        }
    }
    function validForm() {
        const emailValid = !requiredValidation(emailField, emailErrorField) && !emailValidation(emailField, emailErrorField);
        const passwordValid = !requiredValidation(passwordField, passwordErrorField) && !passwordValidation(passwordField, passwordErrorField);
       
        return emailValid && passwordValid;
    }
    emailField.addEventListener('input', () => {
        requiredValidation(emailField, emailErrorField);
        emailValidation(emailField, emailErrorField);
    });

    passwordField.addEventListener('input', () => {
        requiredValidation(passwordField, passwordErrorField);
        passwordValidation(passwordField, passwordErrorField);
    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validForm()) {
            alert('Sukces');
        }
    });
});
class Ksiazka{
    constructor(tytul, rok, imie, nazwisko) {
        this.tytul = tytul;
        this.rok = rok;
        this.imie = imie;
        this.nazwisko = nazwisko;
    }

    informacje(){
        return `Imie autora: ${this.imie}, nazwisko autora: ${this.nazwisko}`;
    }
}
const ksiazki=[
    new Ksiazka("Ksiazka1",1981,"Piotr","Nowak"),
    new Ksiazka("Ksiazka2",1812,"Andrzej","Lis"),
    new Ksiazka("Ksiazka3",1943,"Adam","Jurkowski"),
    new Ksiazka("Ksiazka4",1812,"Lukasz","Kregiel")
]
function KsiazkizRoku(ksiazki, rok) {
    return ksiazki.filter(ksiazka => ksiazka.rok === rok).map(ksiazka => `${ksiazka.tytul} ${ksiazka.imie} ${ksiazka.nazwisko}`);
}

const rok = 1812;
const ksrok = KsiazkizRoku(ksiazki, rok);
console.log(`Ksiazki wydane w roku ${rok}: ${ksrok.join(', ')}`);

