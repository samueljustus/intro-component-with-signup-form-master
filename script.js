const form = document.querySelector('form');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();   //this prevents the form from being submited without checking the input
    checkInputs();      // A function that checks the inputs
})

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === '') {
        errorFor(firstName, 'First Name cannot be empty');                            
    } 
    else {
        successFor(firstName);           
    }
    if (lastNameValue === '') {
        errorFor(lastName, 'Last Name cannot be empty');
    }
    else {
        successFor(lastName);
    }
    if (emailValue === '') {
        errorFor(email, 'Email cannot be empty');
    } 
    else if (!emailValue.match(pattern)) {
        errorFor(email, 'Looks like this is not an email')
    } 
    else {
        successFor(email);
    }
    if (passwordValue === '') {
        errorFor(password, 'Password cannot be empty');
    }
    else if (passwordValue.length < 8) {
        errorFor(password, 'Password cannot be less than 8 characters');
    }
    else {
        successFor(password);
    }
}

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


function errorFor(input, message) {         //a function thst shows the error message for that input
    const parentOfInput = input.parentElement;
    const small = parentOfInput.querySelector('small');
    parentOfInput.classList.add('error');
    small.innerText = message;
}

function successFor(input) {               // a function that shows success message if there is any
    const parentOfInput = input.parentElement; 
    parentOfInput.classList.add('success');
}
