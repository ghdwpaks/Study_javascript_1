//https://youtu.be/S4BN1tZmmWw
//해당 강의에 나오는 마지막 코드

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICK_CLASS);
}

function init() {
    title.addEventListener("clock",handleClick);
}
init();