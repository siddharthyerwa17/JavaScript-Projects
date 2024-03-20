const inputslider = document.getElementById("inputslider");
const slidervalue = document.getElementById("slidervalue");
const passbox = document.getElementById("passbox");
const lowercaseEl =  document.getElementById("lowercase");
const uppercaseEl =  document.getElementById("uppercase");
const numberEl =  document.getElementById("number");
const symbolEl =  document.getElementById("symbol");
const generateBtn = document.getElementById("getbtn");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*";

slidervalue.textContent = inputslider.value;
inputslider.addEventListener("input",()=>{
    slidervalue.textContent = inputslider.value;
})


generateBtn.addEventListener("click", ()=>{
    passbox.value = generatePassword();
});



function generatePassword(){
    const length = inputslider.value;
    let characters = "";
    let password = "";

    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters :"";
    characters += numberEl.checked ? numbers :"";
    characters += symbolEl.checked ? symbol :"";

    for(let i=0; i<length;i++){
        password += characters.charAt(Math.floor(Math.random()* characters.length));
        console.log(password);
    }

    return password
}