//declar as constantes
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordtwo = document.getElementById('passwordtwo');

form.addEventListener('submit', (e) => {
    e.preventDefault();//serve para previnor o comportamento

    checkInputs();//vai executar a função de checagem dos inputs
});

function checkInputs() {
    const usernameValue = username.value.trim()//remove os espaços em branco
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if (usernameValue === '') {//é vazio ? é verdadeiro -> entra no if
        //mostro erro
        //adciono a class erro

        erroValidation(username, 'Preencha o campo')
    } else if (usernameValue.length <= 5) {
        erroValidation(username, 'Esse campo deve conter no minimo 5 carcteres')

    } else {
        //cumpriu o requisito entrou no else 
        succesValidation(username)
    }

    if (emailValue == '') {
        erroValidation(email, 'Prencha o campo')
    } else {
        succesValidation(email)
    }

    if (password === '') {
        erroValidation(password, 'Preencha o campo');
    } else if (passwordValue.length <= 8) {
        erroValidation(password, 'Esse campo deve conter no minimo 9 carcteres')
    } else {
        succesValidation(password);
    }

    if (passwordtwoValue === '') {
        erroValidation(passwordtwo, 'Preencha o campo');
    } else if (passwordValue !== passwordtwoValue) {
        erroValidation(passwordtwo, 'A senha dever ser igual');
    } else {
        succesValidation(passwordtwo);
    }
}

function erroValidation(input, message) {
    const formControl = input.parentElement;//pega o elemento pai do input
    const small = formControl.querySelector('small')//identifica a tag (small) do html

    small.innerText = message//variavel
    formControl.className = 'form-control error';
}

function succesValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}




