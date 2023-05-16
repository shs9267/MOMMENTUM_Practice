//js 로 html 가져오기

const h1 = document.getElementById("title");

h1.innerText = "Got You!";

console.dir(h1); //여러 항목 찾기
console.log(h1.id);

//getElementById = 하나의 값, getElementByClassName, getElementByTagName = 배열
//querySelector, querySelectorAll 
//(".hello h1"), 선택자가 id인 경우 = ("#hello")
//title.style.color = "blue"; = title (document안의 class hello 안의 h1 안의 style 안의 color를 blue로 바꿈)
//addEventListener를 통해 클릭과 같은 동작을 조정 가능

const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);

function handleTitleClick(){
    console.log("click me");
    h1.style.color = 'white';
}

function handleMouseEnter(){
    h1.innerText = "mouse is here";
}

function handleMouseEnter1(){
    h1.innerText = "mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("어딜");
}

function windowOffline(){
    alert("SOS no Wifi");
}

function windowOnline(){
    alert("ALL GOOD");
}


h1.addEventListener("click", handleTitleClick); 
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseEnter1);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", windowOffline);
window.addEventListener("onine", windowOnline);

//click으로 색바꾸기

const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === 'blue'){
        newColor = 'tomato';
    } else{
        newColor = 'blue';
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick); 

//classList 사용해서 h1.class 값 변경

const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);

function handleTitleClick(){
    const clickedClass = 'clicked';
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else{
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick); 

// const부터 else를 한줄로 요약

h1.classList.toggle("clicked");

