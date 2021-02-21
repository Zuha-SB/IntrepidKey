// Script for splash screen
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add("invisible")
    }, 1800)
});

// Script for generating only small alphabets password
const empty = "";
const lcase = "abcdefghijklmnopqrstuvwxyz";

const len = document.getElementById("numberinput");
const lowcase = document.getElementById("lowercase");
const submit = document.getElementById("button");
const pass = document.getElementById("password");

submit.addEventListener('click', () => {

    let inipass = empty;
    (lowcase.checked) ? inipass += lcase : "";

    pass.value = generatePassword(len.value, inipass)
});

function generatePassword(l, inipass) {
    let pas = "";
    for (let i = 0; i < l; i++) {
        pas += inipass.charAt(Math.floor(Math.random() * inipass.length));
    }
    return pas;
}

// script for copied! popup
function myFunction() {
    pass.select();
    document.execCommand("copy");
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    setTimeout(function () {
        popup.classList.remove("show");
    }, 1000);
}

// Script for character amount slider 
var slider = document.getElementById("slider");

slider.oninput = function () {
    len.value = slider.value;
}