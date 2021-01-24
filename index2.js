console.log(document.getElementById);
const title = document.getElementById("title");
const title2 = document.querySelector("title");
const title3 = document.querySelector("#title");
console.log(`title2 = ${title2}`);
console.log(`title3 = ${title3}`);
if(title.innerHTML === "html") {
    console.log(`title = ${title}`);
    console.log(`title.innerHTML = ${title.innerHTML}`);
    title.innerHTML = "Hi html!"
    console.log(`(changed)title = ${title}`);
    console.log(`(changed)title.innerHTML = ${title.innerHTML}`);
}
console.dir(title);
title.style.color = "aqua";

//document.title 과 const title로 생성한 title은 다른객체이다.
console.log(document.title);
document.title = "Hello world!";
console.log(title);
title.innerHTML = "Hello 2 world!";

