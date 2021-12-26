const NUMBER_OF_IMG = 6;

const randomFileNum = Math.floor(Math.random() * NUMBER_OF_IMG);
const body = document.querySelector("body");
body.style.background = `url("src/img/${randomFileNum}.jpg") no-repeat`;
body.style.backgroundSize = "cover";