// const != let
const a = 5;
let b = 1;

console.log(a+b);
console.log(a*b);
console.log(a/b);

b = 3;
console.log(b);

// boolean
const am= null;
const bm= true;
const dm= false;
let cm ;

//array
const dayOfWeek = ["mon", "tue", "wen"];

console.log(dayOfWeek);

dayOfWeek.push("sun");

console.log(dayOfWeek)

// {} 안은 object
const player ={
    name: "song",
    points : 10,
    fat : false,
};

console.log(player);
player.lastname = "potato";
console.log(player);

//fuction
function sayHello(){
    console.log("Hello my name is C");
}

//fuction 안에 값 넣기
function plus(a,b){
    console.log(a + b);
}

function divide(a,b){
    console.log(a / b);
}

plus(6,80);
divide(3,6);

// 계산기
const calculate = {
    plus : function (a,b){
        console.log(a+b);
    },
    minus : function (a,b){
        console.log(a-b);
    },

    times : function (a,b){
        console.log (a*b);
    }
}

calculate.plus(3,4);
calculate.minus(4,3);
calculate.times(3,4);

//fuction 내부에 return 쓰고 그 return 값 정의해서 console.log하기
//console.log는 그림의 떡, 꺼내 먹으려면 return 필요
//return은 카페나 식당의 테이크아웃 개념인 거 같음
//함수에서 만들어서 내보낸 결과값을 함수 밖으로 들고 나가서 다른데서 그대로 출력하건 다른 거랑 섞어서 비벼먹건 볶아먹건 사용할 수 있게 해줌
const age = 95;
function cal(ageof){
   return ageof +2;
}

const krAge = cal(age);

console.log(krAge);

//isNAN = Not a Number 숫자가 아니면 참 숫자면 거짓
//if , else if, else

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)//그냥 이 함수를 쓰면 브라우저에서 위치 좌표를 제공함 
// 위 10줄로 user의 위치를 알 수 있음.