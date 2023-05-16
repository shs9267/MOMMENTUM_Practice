//login 버튼 출력

const loginFormInput = document.querySelector("#login-form input");
const loginFormButton = document.querySelector("#login-form button");

function onLoginSubmit(){
    const username = loginInput.value;
    if (username ==""){
        alert("Please write your name");
    } else if(username.length>15){
        alert("your name is long");
    }
    console.log(username);
}

loginFormButton.addEventListener("click", onLoginSubmit);

//javascript에서 구현하는 대신 할 수 있다면 html의 기본 속성을 최대한 이용하기
//위의 js는 html에서 기본적으로 구현 가능 (input 앞에 form을 붙임)
//html의 form 기능을 사용하여 버튼 클릭시 submit이 일어남.(새로고침도)
//preventDefault(); 브라우저가 기본 동작을 못하게 막아줌
//event는 submit의 관련 정보 및 기능을 담는 통
//4.2강의 이해 안되면 다시 듣기

const loginForm = document.querySelector("#login-form");
const loginFormInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault(); //브라우저가 기본 동작을 못하게 막아줌
    console.log(loginInput); //브라우저가 새로고침되지 않음
}

//</form>
//<a  href="https://www.youtube.com">Go to rest</a> html에 들어가 있을때때

function handleLink(event){ 

    event.preventDefault();
    console.dir(event);  // window>document>html>body>a를 클릭한 것
    alert("진짜?"); //잠시동안 막아줌
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLink); //안에 있는 함수는 내가 하는게 아니라 브라우저가 해주는 것

// "Hello "+ username; === `Hello ${username}`;
//html에 <h1 id="greeting" class="hidden"></h1> 추가
// css에 추가 .hidden{display: none;}
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    console.log(username);
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", onLoginSubmit);

//
localStorage.setItem("username", "shs");
localStorage.getItem("username");
localStorage.removeItem("username");


