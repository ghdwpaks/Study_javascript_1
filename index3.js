const title = document.querySelector("#title");

function handleResize(event) {
    console.log(event);
    //console.log("I have been resized");
}
let check_a1 = true;
function checkclick() {
    title.style.color = "gray";
    if(check_a1 == true) {
        title.style.color = "aqua";
        check_a1 = false;
    } else {
        title.style.color = "gray";
        check_a1 = true;
    }
    console.log(`title.style.color = ${title.style.color}`);
}

function checkclick2() {
    if(title.style.color === "gray") {
        title.style.color = "aqua";
    } else {
        title.style.color = "gray";
    }
    console.log(`title.style.color = ${title.style.color}`);
}

//window.addEventListener("resize",handleResize);
window.addEventListener("resize",handleResize);
//놀랍게도 바로 위에 줄에 handleResize는 괄호가 붙지 않는 상태로 쓴다.
title.addEventListener("click", checkclick2);

if (10 < 5) {console.log("10 < 5 = true");
} else {console.log("10 < 5 = false");}
if ("10" === 10) {console.log("true 1 condiction")
} else if ("10" === "10") {console.log("true 2 condiction")
} else {console.log("anything else");}
if(20 > 5 && "ghdwpaks" === "ghdwpaks") {console.log("and true");
} else if (20 > 5 && "ghdwpaks" === "ghdwpaks"){console.log("and true");
} else {console.log("false");}
if(20 > 5 || "ghdwpaks" === "ghdwpaks") {console.log("or true");
}else if (20 > 5 || "ghdwpaks" === "ghdwpaks"){console.log("or true");
}else {console.log("false");}

//질의응답을 할 수 있는 prompt라는 기능이 있지만 그냥 안쓰는게 좋다. 기본적으로 저 prompt라는 명령어를 만나게 된다면 사이트 전체가 멈추게 되며 사용자는 올바른 상호작용 값을 입력하는것에 있어서 강제성을 가지게 돼버린다.
const age = prompt("Hello?");
console.log(age);
if (age > 18 && age < 150) {
    console.log("You can buy Alcohol drinks");
    alert("You can buy Alcohol drinks");
} else if (age >= 150) {
    console.log("are you kidding me?");
    alert("are you kidding me?");
} else {
    console.log("You can't buy Alcohol drinks");
    alert("You can't buy Alcohol drinks");
}

const color = prompt("what's your want of text color?");
title.style.color = color;
console.log(`color = ${color}`);


