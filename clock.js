const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const min = date.getMinutes();
    const hours = date.getHours();
    let h = hours;
    const sec = date.getSeconds();
    
    let am_or_pm;

    if(hours == 12) {h = 1;am_or_pm = 'PM';
    } else if (hours > 12) {h = hours - 12;am_or_pm = 'PM';
    } else {am_or_pm = 'AM';}

    clockTitle.innerHTML = `${am_or_pm}  ${add0(h)}:${add0(min)}:${add0(sec)}`;

}
function add0(a) {
    return a < 10 ? `0${a}` : `${a}`
}


function init(){
    getTime();
    setInterval(getTime, 500);
}


init();