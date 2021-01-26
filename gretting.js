const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greeting");

const test_inner = document.querySelector(".test_innerHTML");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS,text);

}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue); 
    saveName(currentValue);
}

function askForName () {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}



function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    //greeting.innerText = `Hello ${text}`;
    greeting.innerHTML = `Hello ${text}`;
}


function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
        //here isnt user
    } else {
        paintGreeting(currentUser);
        //here is user
    }
}
function c(a) {
    console.log(a);
}

function init() {
    c(form);
    c("form.classList = ");
    c(form.classList);
    /*
    c(test_inner.innerHTML);
    test_inner.innerHTML = `Hello world! thx ghdwpaks`;
    */
    loadName();
}
init();



/*
const form = document.querySelector(".js-from");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function askForName() {
    form.classList.add(SHOWING_CN);
}

function paintGreeing(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    console.log(currentUser);
    if(currentUser === null ) {
        askForName();
        //not be a user
    } else {
        paintGreeing(currentUser);
        //be a user
    }
}




function init() {


}
init();
*/