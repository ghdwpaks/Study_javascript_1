//원래는 id가 title인 객체에 관해서, 객체를 누르면 색깔이 바뀌는 역할을 수행하는 스크립트가 되었어야하는데 왜 안되는지도 모르겠고 이미 index3.js에서 구형해놓은 사항이였기때문에 이거 프로그램 자체를 폐기함.
const title = document.querySelector("#title");

const BASE_COLOR = "#34495e";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    console.log(currentColor);
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();

