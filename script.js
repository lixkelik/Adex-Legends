window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener('load', function() {
    const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
    const navbarLinks  = document.getElementsByClassName('navbar-links');
    toggleButton.addEventListener("click", function() {
        for (var i = 0; i < navbarLinks.length; i++) 
            navbarLinks[i].classList.toggle("active");
    });
});

const form = document.getElementById('form');
const username = document.getElementById('username');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const address = document.getElementById('address');
let btn = document.getElementById('btnRegis');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const addressValue = address.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be empty');
    } else {
        setSuccessFor(username);
    }

    if(fullnameValue === ''){
        setErrorFor(fullname, 'Full name cannot be empty');
    } else {
        setSuccessFor(fullname);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be empty');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be empty');
    } else if(!isPassword(passwordValue)){
        setErrorFor(password, 'Password must be at least 8 characters');
    } else {
        setSuccessFor(password);
    }

    if(addressValue === ''){
        setErrorFor(address, 'Address cannot be empty');
    } else {
        setSuccessFor(address);
    }

    if (usernameValue !== '' && fullnameValue !== '' && emailValue !== '' && passwordValue !== '' && addressValue !== ''){
        btn.onclick = alert('Success');
    }
    
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email){
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);

}

function isPassword(password){
    return /^(?=.*\d).{8,}$/.test(password);
}