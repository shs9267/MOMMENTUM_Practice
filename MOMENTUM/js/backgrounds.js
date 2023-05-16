const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //element 생성

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage); //body에 추가
