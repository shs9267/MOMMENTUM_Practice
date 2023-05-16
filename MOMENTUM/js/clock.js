const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2,0);
    const seconds = String(date.getSeconds()).padStart(2,0);
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock();
setInterval(getClock, 1000); //반복호출

//.padStart(1,x) x 수로 글자늘리기
