const form = document.getElementById('form');
const username = document.getElementById('username');
const Email = document.getElementById('Email');
const password = document.getElementById('password');
const password_again = document.getElementById('confirm password');

function showError(input, message){
    const fromControl=input.parentElement;
    fromControl.className= 'form-control error';
    const small= fromControl.querySelector('small');
    small.innerText= message;
}

function showSuccess(input){
    const fromControl=input.parentElement;
    fromControl.className='form-control success';

}

function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value){
        showError(input2, 'password do not match');
    }
}

function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    } else{
        showError(input, 'Email is not valid');
    }

}

function checkRequired(inputArr){
inputArr.forEach(function(input){
    if(input.value.trim()===''){
        showError(input, `${getName(input)} is required`);
    } else{
        showSuccess(input);
    }
});
}
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getName(input)} must be at least ${min} characters`);
    } else if(input.value.length>max){
        showError(input, `${getName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}
function getName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username,Email,password,password_again]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(Email);
    checkPasswordsMatch(password, password_again);
});
