const API_KEY = "df35a1e8d2437c41da1269ad62946143";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json().then((data)=> {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
    }));//url을 부름 fetch는 promise(당장 뭔가 일어나지 않고 시간이 좀 걸린 후) json은 url로 나온 내용 전부

}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)//그냥 이 함수를 쓰면 브라우저에서 위치 좌표를 제공함 
