//https://youtu.be/S4BN1tZmmWw
//해당 강의를 보고 내가 작성한 코드
const title = document.querySelector("#title");

const title_CLASS = "clicked";
let let_title_class = title_CLASS;

function handleClick() {
    const hasClass = title.classList.contains(title_CLASS);
    console.log(`title.classList.contains = ${title.classList}`)
    console.log(`hasClass = ${hasClass}`);
    if(!hasClass) {
        if (title.classList.contains("unclicked")) {
            title.classList.remove(let_title_CLASS);
        }
        let_title_CLASS = "clicked";
        title.classList.add(let_title_CLASS);
    } else {
        title.classList.remove(let_title_CLASS);
        let_title_CLASS = "unclicked";
        title.classList.add(let_title_CLASS);

    }

}

function init() {
    title.addEventListener("click", handleClick);
}
init();