const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitButton = document.querySelector("button");

password.addEventListener("input",function(){
    const passwordvalue = password.value;
    const passwordLength = passwordvalue.length;

    let strengthValue = '';

    if(password ===0){
        strengthValue = '';
    }else if(passwordLength<5){
        strengthValue = 'weak';
    }else if(passwordLength<10){
        strengthValue = 'medium';
    }else {
        strengthValue = 'strong';
    }

    strength.textContent = strengthValue;
    message.style.display = "block"   // display message
});

submitButton.addEventListener("click",function(){
    const passwordType = password.getAttribute('type');

    if(passwordType ==='password'){
        password.setAttribute('text','type')
    }else{
        password.setAttribute('type','password')
    }
});